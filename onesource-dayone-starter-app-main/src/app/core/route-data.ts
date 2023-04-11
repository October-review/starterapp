import { ActivatedRoute, Data, UrlSegment } from "@angular/router";

export interface RouteData {
    mode?: 'dialog' | 'page';
    navigateBackUrl?: string;
    path: string;
}

export function getRouteData(route: ActivatedRoute): RouteData {
    let parent: ActivatedRoute | null = route.root 
    let lastParent: ActivatedRoute | null = route.root 
    let data: Data | undefined = {};
    let path: UrlSegment[] = [];
    while(parent != null) {
      const firstChild: ActivatedRoute | null  = parent.firstChild;
      data = Object.assign(data, firstChild?.snapshot?.data);
      path = [...path, ...parent.snapshot.url];
      lastParent = parent;
      parent = firstChild;
    }
    return {
        mode: data.mode,
        navigateBackUrl: data.navigateBackUrl,
        path: path.map(s => s.path).join('/'),
    }
}