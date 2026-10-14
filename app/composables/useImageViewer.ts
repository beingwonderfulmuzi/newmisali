import type { SchoolMedia } from '~/data/media';

export type ImageViewerOpen = (item: SchoolMedia, event: MouseEvent, collection?: SchoolMedia[]) => void;

export function useImageViewer() {
	return inject<ImageViewerOpen>(`school-image-viewer`);
}
