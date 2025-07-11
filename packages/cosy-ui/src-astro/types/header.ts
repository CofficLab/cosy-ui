import type { INavItem } from './nav';

export interface IHeaderProps {
  /**
   * 侧边栏是否默认展开
   * @default false
   */
  defaultSidebarOpen?: boolean;

  /**
   * 导航栏高度
   * @default "md"
   */
  height?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * 语言选项列表
   */
  languages?: string[];

  /**
   * Logo图片元数据
   */
  logo?: ImageMetadata;

  /**
   * Logo 链接地址
   * @default "/"
   */
  logoHref?: string;

  /**
   * 导航菜单项
   */
  navItems?: INavItem[];

  /**
   * 导航栏位置
   * @default "start"
   */
  navPosition?: 'start' | 'center' | 'end';

  /**
   * 水平内边距
   * @default "md"
   */
  paddingHorizontal?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  /**
   * 垂直内边距
   * @default "md"
   */
  paddingVertical?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  /**
   * 圆角大小
   * @default "md"
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * 是否显示侧边栏切换按钮
   * @default false
   */
  showSidebarToggle?: boolean;

  /**
   * 是否显示主题切换按钮
   * @default false
   */
  showThemeSwitcher?: boolean;

  /**
   * 社交媒体链接列表
   */
  socialLinks?: Array<{
    name: string;
    url: string;
    icon: any;
  }>;

  /**
   * 是否固定在顶部
   * @default true
   */
  sticky?: boolean;
}
