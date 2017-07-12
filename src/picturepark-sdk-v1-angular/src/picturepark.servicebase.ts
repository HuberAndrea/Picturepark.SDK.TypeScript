import { Inject, OpaqueToken } from '@angular/core';
import { Response, RequestOptionsArgs } from '@angular/http';
import { AuthService } from './index';

export abstract class PictureparkServiceBase {
    public constructor(private authService: AuthService) {
    }
    
    getBaseUrl(defaultUrl: string) {
        return this.authService.apiServer;
    }

    protected transformOptions(options: RequestOptionsArgs) {
        return this.authService.updateTokenIfRequired().then(() => {
            if (options.headers) {
                if (this.authService.token) {
                    options.headers.append("Authorization", "Bearer " + this.authService.token);
                }
                options.headers.append("Picturepark-CustomerAlias", "dev");
            }

            return options;
        });
    }
}