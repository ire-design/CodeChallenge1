# CodeChallenge1

# 1
# Net Salary Calculator

This JavaScript program calculates an individual's net salary based on their basic monthly salary and benefits. It computes PAYE (Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary using the current KRA, NHIF, and NSSF rates.

## Files

- **index.html**: HTML file for user interface.
- **netsalary.js**: JavaScript file containing the net salary calculation logic.
- **README.md**: This file, providing an overview of the project.
- **.gitignore**: Git ignore file to exclude unnecessary files from version control.

## Installation

No installation required. Just open `index.html` in a web browser to use the calculator.

## Usage

1. Open `index.html` in a web browser.
2. Enter the basic monthly salary and benefits when prompted.
3. View the calculated PAYE, NHIF Deductions, NSSF Deductions, gross salary, and net salary in the console.

## Functionality

The `calculateNetSalary` function computes the following:
- **Gross Salary**: Sum of basic salary and benefits.
- **PAYE (Tax)**: Calculated based on annual gross salary using predefined tax brackets.
- **NHIF Deduction**: Based on the gross salary according to NHIF rates.
- **NSSF Deduction**: Divided into Tier I and Tier II contributions based on the gross salary.
- **Housing Levy**: Calculated as a percentage of the gross salary.
- **Net Salary**: Gross salary minus total deductions.

## Example Output

Upon entering the basic salary and benefits, the program will output the detailed breakdown of calculated values in the console.

## Guidelines

This project follows specific guidelines:
- One folder containing 3-4 files for each solution.
- Each file dedicated to a single functionality (e.g., calculation, interface).
- Adherence to JavaScript best practices and KRA, NHIF, and NSSF guidelines for accurate calculations.

## Credits

- Data sources: https://www.aren.co.ke/payroll/taxrates.htm  [KRA](https://www.kra.go.ke), https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.



# 2
# spped-Demerit Points Calculator 

This JavaScript function calculates demerit points based on the speed of a car relative to the speed limit.

## Functionality

The `calculateDemeritPoints` function performs the following steps:
1. Prompts the user to input the speed of the car.
2. Converts the input to an integer.
3. Compares the speed with a predefined speed limit (70 in this case).
4. If the speed is below the limit, it outputs "OK".
5. If the speed exceeds the limit, it calculates demerit points based on the formula `(speed - speedLimit) / 5`.
6. Outputs the calculated demerit points.
7. Checks if the demerit points exceed 12. If so, it outputs "License suspended".

## Usage

1. Call the `calculateDemeritPoints` function.
2. Enter the speed of the car when prompted.
3. View the console output which will indicate whether the speed is within the limit, the calculated demerit points, and if applicable, a notification about license suspension.

## Example

Example scenario:
- User enters a speed of 80.
- Function calculates demerit points as `(80 - 70) / 5 = 2`.
- Console output: `Points: 2`.

## Notes

Ensure the input is a valid integer. Non-integer inputs will be treated as `NaN` (Not a Number).

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.


# 3
# Student Grade Calculator

This JavaScript function evaluates a student's score and assigns a grade based on the score's value. The function prompts the user to input a score and then determines the corresponding grade according to predefined ranges.

## Functionality

The `studentGrade` function performs the following steps:

1. Prompts the user to input the student's score.
2. Converts the input to an integer.
3. Validates that the score is within the range of 0 to 100.
4. Based on the score, assigns a grade as follows:
   - **A** for scores greater than 79.
   - **B** for scores between 60 and 79.
   - **C** for scores between 50 and 59.
   - **D** for scores between 40 and 49.
   - **E** for scores below 40.
5. If the score is outside the range of 0 to 100, it outputs an error message.

## Usage

1. Call the `studentGrade` function.
2. Enter the student's score when prompted.
3. View the console output to see the grade assigned based on the input score.

## Example

Example scenarios:
- User enters a score of 85.
  - Console output: `Your score is: 85 hence your grade is A`.
- User enters a score of 72.
  - Console output: `Your score is: 72 hence your grade is B`.
- User enters a score of 45.
  - Console output: `Your score is: 45 hence your grade is D`.
- User enters a score of 30.
  - Console output: `Your score is: 30 hence your grade is E`.

## Notes

- Ensure the input is a valid integer within the range of 0 to 100.
- Scores outside this range will result in an error message.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
