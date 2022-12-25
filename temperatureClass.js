function Temperature(Celsius)
{
    if(Celsius>-273)
    {
        this.Celsius=Celsius;
    }
    this.changetodegreeK=function ()
    {
        return "Độ K tương ưng là:" +Number(this.Celsius + 273.15) ;
    }
    this.changetoKelvin=function ()
    {
        return "Độ F tương ứng là:" + Number((this.Celsius*1.8)+32);
    }
}
let temperature=new Temperature(30);
document.getElementById("result1").innerHTML=temperature.changetodegreeK();
document.getElementById("result2").innerHTML=temperature.changetoKelvin();
