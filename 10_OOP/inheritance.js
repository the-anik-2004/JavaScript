const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false,
    experience:true
}

const TAsupport={
    makeAssignment:'JS tasks',
    fullTime:true,
    __proto__:teachingSupport,
}
teacher.__proto__=TAsupport;
console.log(teacher.makeAssignment)

//MODERN SYNTAX
Object.setPrototypeOf(teachingSupport,teacher);