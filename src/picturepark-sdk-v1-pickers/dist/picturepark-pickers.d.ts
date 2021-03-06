declare module "pictureparkPickers" {
    
    /**
     * Opens a content picker window to select content items and create an embedded share.
     *
     * @param serverUrl The URL of the Picturepark server
     * @param completed Callback which is called when the window has been closed (share is undefined if the user cancelled)
     */
    export function showContentPicker(serverUrl: string): any;
    export interface IShare {
        shareId: string;
        items: {
            token: string;
            url: string;
        }[];
    }
}
