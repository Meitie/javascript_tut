//the logic is that we use the UI / budget controller to get the information and do a few tasks for us and then in the app controller we call these methods.

//BUDGET CONTROLLER MODULE
var budgetController = (function() {

  // New function constructor for Expenses
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  }

  //this is a prototype added on to the percentage object method and it is used to calculate the percentage of each individual items percent of total income
  Expense.prototype.calcPercentage = function (totalIncome) {

    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100)
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }

  // New function constructor for Income
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  //calculate totoal
  //forEach can get currentValue, currentIndex, complete array
  var calculateTotal = function(type){
    var sum = 0;
    data.allItems[type].forEach(function(current) {
      sum += current.value;
      //how the above code works ^ 0 [200,400,100] / sum = 0 + 200; /sum = //200 + 400; sum = 600 + 100 = 700
    });
    data.totals[type] = sum;
  }

  // Create a data scructure
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: function(type, des, val) {
      var newItem;

      //[1,2,3,4,5], the next ID = 6 (want it to be next number)
      //[1,2,4,6,8], the next ID = 9 (but if user deletes conflicts can happens)
      // ID = last ID +1 (so it needs always be this)

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create the new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      //push to into data structure (var data)
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    deleteItem: function (type, id){
      var ids, index;

      // id = 6 you want to delete
      //data.allItems[type][id]; so you cant just do this (would work if it was all in order)
      //ids = [1 2 4 6 8] but because it sometimes wont be in order and items can be deleted need a way to find and delete it
      //index = 3

      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
          data.allItems[type].splice(index, 1);
      }

    },

    calculateBudget: function(){
      // calculate the total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calculate the percentage of income that we spend
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1; //when nothing to display say -1
      }
    },
    calculatePercentages: function(){

      /*
      expesnses: a=20   b=10    c=40
      income: = 100
      calucations of it: a=20/100 = 20%   b=10/100 = 10%  c=40/100 = 40%
      its done in the prototype of expenses so it can apply to each once
      */

      data.allItems.exp.forEach(function (currentValue){
        currentValue.calcPercentage(data.totals.inc);
      });
    },
    getPercetages: function () {
      var allPerc = data.allItems.exp.map(function(currentValue){
        return currentValue.getPercentage();
      });
      return allPerc;
    },
    getBudget: function(){
      return{
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
    },
    testing: function() {
      console.log(data);
    }
  };

})();









//UI CONTROLLER MODULE
var uiController = (function() {

  // Object Domstrings so that we dont have to always change later on (for conviences)
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  }

  var formatNumber = function(num, type){
      var numSplit, int, dec, type;
      /*
      + or - before the number
      exactly to the 2 decimal points
      comma seperating the numbers
      2310.4567 -> + 2,310.46
      */

      num = Math.abs(num);
      num = num.toFixed(2);


      //splits it in to so like 2310.4567 to 2310 and 4567 from .
      numSplit = num.split('.');


      int = numSplit[0];
      console.log(int);
      if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length-3, 3);
      }

      dec = numSplit[1]

      return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
  };

    //it is a node list not an array, so i can either splice it and make it an array that way or for future just do this
    var nodeListForEach = function(list, callback) {
      for (var i = 0; i < list.length; i++) {
        callback(list[i], [i])
      };
    };

  //object we return from all the functions in this private function to make it accessable by other controllers
  return {
    getInput: function() {
      return {
        // will be either inc or exp (since it a select)
        type: document.querySelector(DOMstrings.inputType).value,
        // both will be user inputed values
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value) //converts the string to a number with decimals (so like $10.50)
      }
    },
    addListItem: function(obj, type) {
      var html, newHTML, element;
      // Create HTML string with placeholder text

      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div><div class="item__delete"> <button class="item__delete--btn">delete<i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else if (type === 'exp') {
        element = DOMstrings.expenseContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">-21%</div><div class="item__delete"><button class="item__delete--btn">delete<i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      // Replace the placeholder text with some actual data
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', formatNumber(obj.value,type));

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

    },

    deleteListItem: function(selectorId){
      //look at blog.garstasio.com/you-dont-need-jquery/dom-manipulation/
      var element = document.getElementById(selectorId);
      element.parentNode.removeChild(element);
    },

    clearFields: function() {
      var fields, fieldsArray;

      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      fieldsArray = Array.prototype.slice.call(fields);

      fieldsArray.forEach(function(currentValue, indexNumber, array) {
        currentValue.value = '';
      });
      fieldsArray[0].focus();
    },


    displayBudget: function(obj){
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
          document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },
    displayPercentages: function(percentages){

      var fields = document.querySelectorAll(DOMstrings.expensesPercentLabel);

      nodeListForEach(fields, function(current, index) {

        if (percentages[index] > 0 ){
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    displayMonth: function() {
      var now,months, year, month;

      now = new Date();
      //var christmas = new Date (2016, 11, 25)

      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();

      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

    },

    changeType: function(){

      var fields = document.querySelectorAll(
        DOMstrings.inputType + ',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue);

        nodeListForEach(fields, function(cur){
          cur.classList.toggle('red-focus');
        })

        document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();









//GLOBAL APP CONTROLLER MODULE
var controller = (function(budgetCtrl, uiCtrl) {

  var setupEventListeners = function() {

    var DOM = uiCtrl.getDOMstrings();

    // what happens when someone hits the check add button
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    // what happens when someone presses enter key (from keypress event)
    document.addEventListener('keypress', function(event) {
      //key is the name of the key event that is pressed, OR which (for older browsers)
      if (event.key === "Enter" || event.which === 13) {
        event.preventDefault(); // prevents the enter key from also triggering a click event (bug when you set focus to checkbox button and then press enter the defualt for enter is to active focus)
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', uiCtrl.changeType);

  };

  // too update the budget
  var updateBudget = function() {
    //1. Calculate the budget
    budgetCtrl.calculateBudget();

    //2. return the budget
    var budget = budgetCtrl.getBudget();

    //3. Display the budget on the UI
    uiController.displayBudget(budget);
  }

  var updatePercetanges = function () {

    // 1. calculate the percentage
    budgetCtrl.calculatePercentages();

    // 2. read them from budget controllers
    var percentages = budgetCtrl.getPercetages();

    // 3. update the user interface with new percentage
    console.log(percentages);
    uiController.displayPercentages(percentages);
  }

  var ctrlAddItem = function() {
    var input, newItem;

    //1. Get the field input data
    input = uiCtrl.getInput();

    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      //2. add Item to budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      //3. Add the new item to UI
      uiController.addListItem(newItem, input.type);

      //4. Clear the fields
      uiController.clearFields();

      //5. Calculate and update budget
      updateBudget();

      //6. calulate and update the percentage
      updatePercetanges();

    }
  }

  var ctrlDeleteItem = function (event){
      var itemId, splitId, type, id;
      //this is to get the item id of the thing you want to delete: so like event.target gives you want you clicked and then parentNode moves up 1 item in the DOM
      itemId = event.target.parentNode.parentNode.parentNode.id;

      if(itemId) {

        //inc-1
        splitId = itemId.split('-');
        type = splitId[0];
        id = parseInt(splitId[1]);

        // 1. delete the item from the data structure
        budgetCtrl.deleteItem(type, id);

        // 2. delete the item from the user interface
        uiController.deleteListItem(itemId);

        // 3. update and show the knew budget
        updateBudget();

        //4. calulate and update the percentage
        updatePercetanges();
      }
  };

  return {
    init: function() {
      console.log('App has started');
      uiController.displayMonth();
      uiController.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();

    }
  }

})(budgetController, uiController);

controller.init();
