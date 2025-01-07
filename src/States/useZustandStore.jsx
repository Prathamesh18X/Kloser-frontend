import { create } from 'zustand';

const useScreenSize = create((set) => ({
  isMobile: false,
  setMobile: (isMobile) => set({ isMobile }),

  isTablet: false,
  setTablet: (isTablet) => set({ isTablet }),

  isDesktop: false,
  setDesktop: (isDesktop) => set({ isDesktop }),
}));

const useProductDetails = create((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export { useScreenSize, useProductDetails };
