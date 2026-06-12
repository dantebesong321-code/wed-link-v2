import api from "./api";


// GET all vendors
export const getVendors = async () => {
  const response = await api.get("/vendors");
  return response.data;  
  console.log(response) 
};


// GET single vendor
export const getVendor = async (id: string) => {
  const response = await api.get(`/vendors/${id}`);
  return response.data;
 
};


// POST create vendor
export const createVendor = async (data: any) => {
  const response = await api.post("/vendors", data);
  return response.data;
};


// PATCH update vendor
export const updateVendor = async (
  id: string,
  data: any
) => {
  const response = await api.put(
    `/vendors/${id}`,
    data
  );
  return response.data;
};

// DELETE vendor
export const deleteVendor = async (
  id: string
) => {
  const response = await api.delete(
    `/vendors/${id}`
  );

  return response.data;
};


export const getVendorsByCategory = async (
  categoryId: string
) => {
  const response = await api.get(
    `/vendors/category/${categoryId}`
  );

  return response.data;
};