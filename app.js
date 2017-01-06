function Student(firstName, favoriteColor) {
  this.firstName = firstName;
  this.favoriteColor = favoriteColor;
}

/**
 * 1. Use the Student constructor function to create variables
 * that represent you and your coding partner(s).
 */

/**
  * 2. Create a function that takes one argument. That argument will
  * represent a single student object. The function will log the student's
  * name.
  */

/***** SWITCH PROGRAMMERS *****/

/**
  * 3. Create a function that takes one argument. That argument will
  * represent a single student object. The function will log the student's
  * favoriteColor.
  */

/**
  * 4. Put both students created in Step 1 into an array called students.
  */

/***** SWITCH PROGRAMMERS *****/

/**
 * 5. Loop over the students array and invoke both functions from Step 2 and
 * Step 3. You should see console logs for each students firstName and favoriteColor.
 */

// step 1
var Hue = new Student("Hue", "Blue");
var Priscilla = new Student("Priscilla", "Teal");

// step 2
function  name (arg) {
  console.log(arg.firstName);
}

// step 3
function color (color) {
  console.log(color.favoriteColor);
}

//step 4
students = [Hue, Priscilla];

//step 5

for (var i = 0; i < students.length; i++) {
  name(students[i]);
  color(students[i]);
}
