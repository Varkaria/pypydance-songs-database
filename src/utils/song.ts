import { Group } from "@/utils/hooks/usePypySongs";

export const getSongMetadata = (metadata: string, group: Group) => {
  switch (group) {
    case Group.FITDANCE:
      return {
        title: metadata.split(' - ')[0],
        artist: metadata.split(' - ')[1],
      };
    default:
      return {
        title: metadata,
        artist: '',
      };
  }
}