import { InjectionToken} from '@angular/core';

export const MY_CONFIG = {
  name: '@Inject标签测试'
};

export const MY_CONFIG_TOKEN = new InjectionToken<string>('my_config.ts');
