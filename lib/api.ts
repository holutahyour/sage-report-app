import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7274/api"; // Adjust as needed

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define API functions for fetching data
export const fetchApSummaryData = async () => {
  try {
    const response = await api.get("/ap-dashboard/summary");
    return response.data;
  } catch (error) {
    console.error("Error fetching AP summary data:", error);
    throw error;
  }
};

export const fetchAgingAnalysisData = async () => {
  try {
    const response = await api.get("/ap-dashboard/aging-analysis");
    return response.data;
  } catch (error) {
    console.error("Error fetching aging analysis data:", error);
    throw error;
  }
};

export const fetchAgingBreakdownData = async () => {
  try {
    const response = await api.get("/ap-dashboard/aging-breakdown");
    return response.data;
  } catch (error) {
    console.error("Error fetching aging breakdown data:", error);
    throw error;
  }
};

export const fetchDistributionByAmountData = async () => {
  try {
    const response = await api.get("/ap-dashboard/distribution-by-amount");
    return response.data;
  } catch (error) {
    console.error("Error fetching distribution by amount data:", error);
    throw error;
  }
};

export const fetchOutstandingAmountsData = async () => {
  try {
    const response = await api.get("/ap-dashboard/outstanding-amounts");
    return response.data;
  } catch (error) {
    console.error("Error fetching outstanding amounts data:", error);
    throw error;
  }
};

export const fetchVendorDetailsData = async () => {
  try {
    const response = await api.get("/ap-dashboard/vendor-details");
    return response.data;
  } catch (error) {
    console.error("Error fetching vendor details data:", error);
    throw error;
  }
};

export default api;
