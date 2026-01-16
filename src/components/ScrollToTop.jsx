'use client';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop - 路由变化时自动滚动到页面顶部
 * 确保每次路由跳转后页面都从顶部开始显示
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
