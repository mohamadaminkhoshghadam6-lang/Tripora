
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export async function apiRequest<T>(endpoint: string): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error("آدرس API در فایل env تنظیم نشده است.");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات از سرور");
  }

  return response.json() as Promise<T>;
}
