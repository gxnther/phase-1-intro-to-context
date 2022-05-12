// const employeeInfo = ["Gray", "Worm", "Security", 1];

function createEmployeeRecord(array) {
    let employeeInfo = {}
    employeeInfo.firstName = array[0];
    employeeInfo.familyName = array[1];
    employeeInfo.title = array[2];
    employeeInfo.payPerHour = array[3];
    employeeInfo.timeInEvents = [];
    employeeInfo.timeOutEvents = [];
    return employeeInfo;
}
createEmployeeRecord();

function createEmployeeRecords(arrays) {
    let a = arrays.map(array => {
        return createEmployeeRecord(array)
    })
    return a;
}

function createTimeInEvent(employee, dateTime) {
    let newArray = dateTime.split(" ");
    let date = newArray[0]
    let hour = parseInt(newArray[1])
    let timeIn = {
        type: "TimeIn" ,
        hour: hour ,
        date: date 
    }
    employee.timeInEvents.push(timeIn)
    return employee
}

function createTimeOutEvent(employee, dateTime) {
    let newArray = dateTime.split(" ");
    let date = newArray[0]
    let hour = parseInt(newArray[1])
    let timeOut = {
        type: "TimeOut" ,
        hour: hour ,
        date: date 
    }
    employee.timeOutEvents.push(timeOut)
    return employee
}

function hoursWorkedOnDate(employee, dateTime) {
    let timeIn = employee.timeInEvents.find(event => event.date === dateTime)
    let timeOut = employee.timeOutEvents.find(event => event.date === dateTime)
    console.log(timeOut.hour - timeIn.hour )
    return (timeOut.hour - timeIn.hour) / 100  
}

function wagesEarnedOnDate(employee, dateTime) {
    console.log(employee)
    return hoursWorkedOnDate(employee, dateTime) * employee.payPerHour
}

function allWagesFor(employee) {
    let allWages = 0
    employee.timeInEvents.forEach(event => {
        allWages += wagesEarnedOnDate(employee, event.date)
    })
    console.log(allWages)
    return allWages
}

function calculatePayroll(employeeRecords) {
    let payroll = 0
    employeeRecords.forEach(employee => {
        payroll += allWagesFor(employee)
    })
    console.log(payroll)
    return payroll
   
}