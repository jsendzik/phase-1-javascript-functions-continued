// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}
function wrapAdjective(adj = "*") {
    return function inner(adj2 = "special") {
        return `You are ${adj}${adj2}${adj}!`
    }
}
