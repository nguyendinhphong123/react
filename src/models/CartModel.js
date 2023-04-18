import axios from "axios";

class CartModel {
    constructor(){
        this.api_url = 'http://127.0.0.1:8000/api/carts';
    }
    getAll(){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    add_to_cart(data){
        return new Promise( (resolve, reject) => {
            axios
            .post(this.api_url,data )
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    
    update(id,data){
        return new Promise( (resolve, reject) => {
            axios
            .put(this.api_url+'/'+id , data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    remove(id){
        return new Promise( (resolve, reject) => {
            axios
            .delete(this.api_url+'/'+id)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
}
export default new CartModel();