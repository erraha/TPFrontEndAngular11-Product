
export enum ProductEventTypes {
  Get_ALL_Product="[Product] Get All Product",
  Get_Selected_Product="[Product] Get Selected Product",
  Get_Avialable_Product="[Product] Get Avialable Product",
  Search_Product="[Product] Search Product",
  New_Product="[Product] New Product",
  Select_Product="[Product] Select Product",
  Edit_Product="[Product] Edit Product",
  Delete_Product="[Product] Delete Product",

}
// solution 3 video 4
export interface ActionEvent {
  type:ProductEventTypes,  // ou bien virgule ca marche aussi
  payLoad?:any   // ? facultatif
}





export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState?:DataStateEnum;
  data?:T;
  errorMessage?:string;
}
