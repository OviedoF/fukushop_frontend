import axios from "axios";
import env from "../env.js";

const request = axios.create({
    baseURL: env.API_URL,
});

const petitions = {};

// * AUTENTICACIÓN

petitions.login = async (data) => {
    try {
        const response = await request.post("/auth/login", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.register = async (data) => {
    try {
        const response = await request.post("/auth/register", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.identifyUser = async () => {
    try {
        const response = await request.get("/auth/login/identify");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * CATEGORÍAS

petitions.getCategories = async () => {
    try {
        const response = await request.get("/category");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.getCategory = async (id) => {
    try {
        const response = await request.get(`/category/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.createCategory = async (data) => {
    try {
        const response = await request.post("/category", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.updateCategory = async (id, data) => {
    try {
        const response = await request.put(`/category/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.deleteCategory = async (id) => {
    try {
        const response = await request.delete(`/category/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * EMAIL

petitions.contact = async (data) => {
    try {
        const response = await request.post("/email/contact", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * COLORES

petitions.getColors = async () => {
    try {
        const response = await request.get("/productColor");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.getColor = async (id) => {
    try {
        const response = await request.get(`/productColor/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.createColor = async (data) => {
    try {
        const response = await request.post("/productColor", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.updateColor = async (id, data) => {
    try {
        const response = await request.put(`/productColor/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.deleteColor = async (id) => {
    try {
        const response = await request.delete(`/productColor/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * PRODUCTOS

petitions.getProducts = async () => {
    try {
        const response = await request.get("/products");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.getProduct = async (name) => {
    try {
        const response = await request.get(`/products/${name}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.filterProducts = async (data) => {
    try {
        const response = await request.post("/products/filter", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.createProduct = async (data) => {
    try {
        const response = await request.post("/products", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.updateProduct = async (id, data) => {
    try {
        const response = await request.put(`/products/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.deleteProduct = async (id) => {
    try {
        const response = await request.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * TALLES

petitions.getSizes = async () => {
    try {
        const response = await request.get("/sizes");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.getSize = async (id) => {
    try {
        const response = await request.get(`/sizes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.createSize = async (data) => {
    try {
        const response = await request.post("/sizes", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.updateSize = async (id, data) => {
    try {
        const response = await request.put(`/sizes/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.deleteSize = async (id) => {
    try {
        const response = await request.delete(`/sizes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * SUBCATEGORÍAS

petitions.getSubcategories = async () => {
    try {
        const response = await request.get("/subcategories");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.getSubcategory = async (id) => {
    try {
        const response = await request.get(`/subcategories/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.createSubcategory = async (data) => {
    try {
        const response = await request.post("/subcategories", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.updateSubcategory = async (id, data) => {
    try {
        const response = await request.put(`/subcategories/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.deleteSubcategory = async (id) => {
    try {
        const response = await request.delete(`/subcategories/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * SUBTIPOS

petitions.getSubtypes = async () => {
    try {
        const response = await request.get("/subTypes");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.getSubtype = async (id) => {
    try {
        const response = await request.get(`/subTypes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.createSubtype = async (data) => {
    try {
        const response = await request.post("/subTypes", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.updateSubtype = async (id, data) => {
    try {
        const response = await request.put(`/subTypes/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.deleteSubtype = async (id) => {
    try {
        const response = await request.delete(`/subTypes/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// * TIPOS

petitions.getTypes = async () => {
    try {
        const response = await request.get("/types");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.getType = async (id) => {
    try {
        const response = await request.get(`/types/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.createType = async (data) => {
    try {
        const response = await request.post("/types", data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.updateType = async (id, data) => {
    try {
        const response = await request.put(`/types/${id}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

petitions.deleteType = async (id) => {
    try {
        const response = await request.delete(`/types/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default petitions;