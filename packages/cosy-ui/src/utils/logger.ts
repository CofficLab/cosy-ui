type LogLevel = 'debug' | 'info' | 'warn' | 'error';

// 控制是否显示时间戳
const SHOW_TIMESTAMP = false;

// ANSI 颜色代码
const colors = {
    reset: '\x1b[0m',
    debug: '\x1b[36m', // 青色
    info: '\x1b[32m',  // 绿色
    warn: '\x1b[33m',  // 黄色
    error: '\x1b[31m', // 红色
    gray: '\x1b[90m',  // 灰色用于时间戳
};

class Logger {
    private getCallerInfo(): string {
        const error = new Error();
        const stackLines = error.stack?.split('\n') || [];

        // 从第3行开始查找，跳过不是来自logger.ts的第一个调用
        let targetLine = '';
        for (let i = 3; i < stackLines.length; i++) {
            const line = stackLines[i];
            if (!line.includes('logger.ts')) {
                targetLine = line;
                break;
            }
        }

        if (!targetLine) return '';

        // 匹配文件路径和行号
        const match = targetLine.match(/\((.+):(\d+):\d+\)/) || targetLine.match(/at (.+):(\d+):\d+/);
        if (!match) return '';

        const [_, filePath, line] = match;
        return `${filePath}:${line}`;
    }

    private formatArray(arr: any[]): string {
        const MAX_LINES = 30;
        const MAX_LENGTH = 100;

        const truncateString = (str: string): string => {
            return str.length > MAX_LENGTH ? str.slice(0, MAX_LENGTH) + '...' : str;
        };

        const truncateObject = (obj: any): any => {
            if (typeof obj !== 'object' || obj === null) {
                return typeof obj === 'string' ? truncateString(obj) : obj;
            }

            const result: any = Array.isArray(obj) ? [] : {};
            for (const [key, value] of Object.entries(obj)) {
                result[key] = typeof value === 'string' ? truncateString(value)
                    : typeof value === 'object' ? truncateObject(value)
                        : value;
            }
            return result;
        };

        const items = arr.slice(0, MAX_LINES).map(item => {
            const truncatedItem = truncateObject(item);
            // 使用2个空格缩进，并在每行前添加 "  • "
            const jsonString = JSON.stringify(truncatedItem, null, 2)
                .split('\n')
                .map((line, index) => index === 0 ? `  • ${line}` : `    ${line}`)
                .join('\n');
            return jsonString;
        });

        let output = items.join('\n');
        if (arr.length > MAX_LINES) {
            const remainingCount = arr.length - MAX_LINES;
            output += `\n  ⋮ ... and ${remainingCount} more items`;
        }

        return output;
    }

    private log(level: LogLevel, message: string | object | any[]) {
        const caller = this.getCallerInfo();
        // 使用本地时间，并格式化为 HH:mm:ss 格式
        const timestamp = new Date().toLocaleTimeString('zh-CN', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const formattedMessage = Array.isArray(message)
            ? this.formatArray(message)
            : typeof message === 'object'
                ? JSON.stringify(message, null, 2)
                : message;

        const timestampPart = SHOW_TIMESTAMP
            ? `${colors.gray}${timestamp}${colors.reset} `
            : '';

        const emoji = {
            debug: '🔍',
            info: '🐳',
            warn: '🚨',
            error: '❌'
        }[level];

        // eslint-disable-next-line no-console
        console.log(
            timestampPart +
            `${colors[level]}${emoji} ${level.toUpperCase()}${colors.reset} ` +
            `${colors.gray}:${colors.reset} ` +
            `${colors[level]}${formattedMessage}${colors.reset}`
        );
    }

    debug(message: string | object) {
        this.log('debug', message);
    }

    info(message: string | object) {
        this.log('info', message);
    }

    warn(message: string | object) {
        this.log('warn', message);
    }

    error(message: string | object) {
        this.log('error', message);
    }

    array(title: string, arr: any[]) {
        this.log('info', title + '\n' + this.formatArray(arr));
    }
}

export const logger = new Logger();
