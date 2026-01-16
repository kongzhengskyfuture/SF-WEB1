'use client';

import { motion } from 'framer-motion';
import { Calendar, Trophy, Code, Award, TrendingUp } from 'lucide-react';

/**
 * CompanyTimeline - 公司沿革/実績 Timeline 组件
 * 高信息密度的时间线展示，包含关键节点和项目案例
 */
export default function CompanyTimeline({ timeline }) {
  const getCategoryIcon = (category) => {
    const iconMap = {
      '会社設立': Calendar,
      '認定取得': Award,
      '技術開発': Code,
      '製品リリース': Code,
      'プロジェクト完了': Trophy,
      '実績達成': TrendingUp,
      '組織拡大': TrendingUp
    };
    return iconMap[category] || Calendar;
  };

  return (
    <div className="relative">
      {/* 垂直时间线 */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200">
        <motion.div
          className="absolute top-0 left-0 w-full bg-slate-300"
          initial={{ height: '0%' }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>

      <div className="space-y-8">
        {timeline.map((item, index) => {
          const IconComponent = getCategoryIcon(item.category);
          return (
            <motion.div
              key={`${item.year}-${item.month}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20"
            >
              {/* 时间节点圆点 */}
              <div className="absolute left-6 top-1 w-4 h-4 bg-white border-2 border-slate-400 rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>

              {/* 时间线内容卡片 */}
              <div className="bg-white rounded-lg p-5 border border-slate-200 hover:border-sky-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-4 h-4 text-slate-600" strokeWidth={1.25} />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-500">
                          {item.year}年{item.month}月
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* 成果展示 */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-slate-50 text-slate-700 border border-slate-200 rounded font-medium"
                        >
                          ✓ {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
