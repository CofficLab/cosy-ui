// 定义支持的社交平台及其配置
interface PlatformConfig {
	name: string;
	domains: string[];
}

// 社交链接类型
export interface SocialLink {
	name: string;
	url: string;
	platform: string;
}

// 处理后的社交链接类型
export interface ProcessedSocialLink {
	url: string;
	name: string;
	platform: string;
}

// 社交平台配置
const platformConfigs: Record<string, PlatformConfig> = {
	github: {
		name: 'GitHub',
		domains: ['github.com'],
	},
	twitter: {
		name: 'Twitter',
		domains: ['twitter.com', 'x.com'],
	},
	linkedin: {
		name: 'LinkedIn',
		domains: ['linkedin.com'],
	},
	weibo: {
		name: '微博',
		domains: ['weibo.com'],
	},
	wechat: {
		name: '微信',
		domains: ['wechat.com', 'weixin.qq.com'],
	},
	zhihu: {
		name: '知乎',
		domains: ['zhihu.com'],
	},
	bilibili: {
		name: 'BiliBili',
		domains: ['bilibili.com'],
	},
	youtube: {
		name: 'YouTube',
		domains: ['youtube.com', 'youtu.be'],
	},
	discord: {
		name: 'Discord',
		domains: ['discord.com', 'discord.gg'],
	},
};

// 从 URL 判断社交平台
function detectPlatform(url: string): [string, PlatformConfig] | null {
	try {
		const urlObj = new URL(url);
		const hostname = urlObj.hostname.toLowerCase();

		for (const [platform, config] of Object.entries(platformConfigs)) {
			if (config.domains.some((domain) => hostname.includes(domain))) {
				return [platform, config];
			}
		}
	} catch (e) {
		console.error('Invalid URL:', url);
	}
	return null;
}

// 处理社交链接
export function processSocialLink(link: SocialLink): ProcessedSocialLink {
	const platformInfo = detectPlatform(link.url);

	if (!platformInfo) {
		// 如果无法识别平台，返回默认值
		return {
			url: link.url,
			name: link.name,
			platform: 'default',
		};
	}

	const [platform, config] = platformInfo;
	return {
		url: link.url,
		name: config.name,
		platform,
	};
}
