function fun1(id,roll){
    console.log("id:",id)
    fun2({userroll:"28"})
};
function fun2(roll,subid){
    console.log("userroll:",roll)
    fun3({subid:"2"})
}
function fun3(subid){
    console.log("subid:",subid)
}
fun1("21",function (roll){
    fun2(roll,function(subid){
        fun3(subid)
    })
})
