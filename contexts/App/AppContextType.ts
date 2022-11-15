export type AppContextType = {
  showToast: (message: string, duration?: number) => void;
  catchAxiosError: (error: any) => void;
};
