import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async () => {
    const { data } = await axios.get(`${BASE_URL}/campers`);
    return data.items;
}

export const fetchCampersById = async (camperId) => {
    const { data } = await axios.get(`${BASE_URL}/campers/${camperId}`);
    return data.items;
}