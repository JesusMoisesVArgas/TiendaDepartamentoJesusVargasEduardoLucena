class Cl_mDepartamentos{
    constructor({
        codigo= 0,
        departamento= "",
        nombre= "",
        cantidad= 0,
        precio= 0,
    }) {
        this.codigo=codigo;
        this.departamento=departamento;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    set codigo(c){
        this._codigo= +c;
    }
    get codigo(){
        return this._codigo;
    }
    set departamento(d){
        this._departamento= +d;
    }
    get departamento(){
        return this._departamento;
    }
    set nombre(n){
        this._nombre= +n;
    }
    get nombre(){
        return this._nombre;
    }
    set cantidad(ca){
        this._cantidad= +ca;
    }
    get cantidad(){
        return this._cantidad;
    }
    set precio(p){
        this._precio= +p;
    }
    get precio(){
        return this._precio;
    }

}