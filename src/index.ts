import { NativeModules } from 'react-native';

interface Attributes {
  [key: string]: string;
}

interface RNBaiduMobStat {
  onEvent: (eventId: string, eventLabel: string) => void;
  onEventWithAttributes: (
    eventId: string,
    eventLabel: string,
    attributes: Attributes
  ) => void;
  onEventDuration: (
    eventId: string,
    eventLabel: string,
    /** 毫秒 */
    duration: number
  ) => void;
  onEventDurationWithAttributes: (
    eventId: string,
    eventLabel: string,
    /** 毫秒 */
    duration: number,
    attributes: Attributes
  ) => void;
  onEventStart: (eventId: string, eventLabel: string) => void;
  onEventEnd: (eventId: string, eventLabel: string) => void;
  onEventEndWithAttributes: (
    eventId: string,
    eventLabel: string,
    attributes: Attributes
  ) => void;
  onPageStart: (pageName: string) => void;
  onPageEnd: (pageName: string) => void;
}

export default NativeModules.RNBaiduMobStat as RNBaiduMobStat;
