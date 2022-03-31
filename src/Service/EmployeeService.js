import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8090/api/v1/employees";
const CATEGORY_API_BASE_URL = "http://localhost:8090/api/category";
const PRODUCT_ADD = "/api/v1/employees";
const CATEGORY_ADD = "/api/category";



class EmployeeService{
    

    getEmployees(){
        return axios.get (EMPLOYEE_API_BASE_URL);

    }
    getCategory(){
        return axios.get(CATEGORY_API_BASE_URL )
    }
    createProducts(products)
    {
        return axios.post(PRODUCT_ADD, products);
    }
    createCategory(categories)
    {
        return axios.post(CATEGORY_ADD,categories);
    }
    getProductsById(productsId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + productsId);
    }
    getCategorysById(categoriesId){
        return axios.get(CATEGORY_API_BASE_URL + '/' + categoriesId);
    }
    updateProduct(products, productsId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + productsId, products)
    }
    deleteEmployee(productsId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + productsId);
    }
    
}
export default new EmployeeService()