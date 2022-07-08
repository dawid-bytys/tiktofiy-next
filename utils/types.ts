import type React from 'react';

export type Theme = 'default' | 'carbon' | 'material' | 'metaverse';
export type Status = 'idle' | 'loading' | 'success' | 'error';
export type HTTPMethod = 'POST' | 'PUT' | 'GET';

export interface ErrorResponse {
	readonly message: string;
}

export type Result<T> =
	| { status: 'idle' }
	| { status: 'loading' }
	| { status: 'success'; data: T }
	| { status: 'error'; errorMessage: string };

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type AnyObject = Record<keyof any, unknown>;
export type EmptyObject = Record<keyof any, never>;

export type DeepReadonly<T extends AnyObject> = {
	+readonly [K in keyof T]: T[K] extends AnyObject ? DeepReadonly<T[K]> : T[K];
};

export interface SeoProps {
	readonly title: string;
}

export interface ErrorAlertProps {
	readonly errorMessage: string;
}

export interface AnnouncementProps {
	readonly result: Result<RecognitionResult>;
}

export interface FormProps {
	readonly handleSubmit: (e: React.SyntheticEvent) => void;
	readonly handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	readonly isLoading: boolean;
}

export interface ParagraphProps {
	readonly text: string;
	readonly className?: string;
}

export type SongFound = {
	readonly isFound: true;
	readonly artist: string;
	readonly title: string;
	readonly albumImage?: string;
};

type SongNotFound = {
	readonly isFound: false;
};

export type RecognitionResult = SongFound | SongNotFound;

export interface Settings {
	shazamApiKey: string;
	start: number;
	end: number;
}

export type RequestData = {
	url: string;
	settings: Settings;
};

export interface ChildrenProps {
	children: React.ReactNode;
}

export type SettingsKeys = keyof Settings;

export interface SavedSongs {
	readonly id: string;
	readonly url: string;
	readonly artist: string;
	readonly title: string;
	readonly albumImage?: string;
}

export interface SuccessfulRequest {
	readonly isSuccess: true;
	readonly data: SavedSongs[];
}

export interface UnsuccessfulRequest {
	readonly isSuccess: false;
	readonly errorMessage: string;
}

export type TikTokMetadata = DeepReadonly<{
	statusCode: number;
	itemInfo: ItemInfo;
	shareMeta: ShareMeta;
}>;

type ItemInfo = {
	itemStruct: ItemStruct;
};

type ItemStruct = {
	id: string;
	desc: string;
	createTime: number;
	video: Video;
	author: Author;
	music: Music;
	challenges: Challenge[];
	stats: Stats;
	isActivityItem: boolean;
	duetInfo: DuetInfo;
	originalItem: boolean;
	officalItem: boolean;
	textExtra: TextExtra[];
	secret: boolean;
	forFriend: boolean;
	digged: boolean;
	itemCommentStatus: number;
	showNotPass: boolean;
	vl1: boolean;
	itemMute: boolean;
	authorStats: AuthorStats;
	privateItem: boolean;
	duetEnabled: boolean;
	stitchEnabled: boolean;
	shareEnabled: boolean;
	stickersOnItem: StickersOnItem[];
	isAd: boolean;
	duetDisplay: number;
	stitchDisplay: number;
};

type Author = {
	id: string;
	uniqueId: string;
	nickname: string;
	avatarThumb: string;
	avatarMedium: string;
	avatarLarger: string;
	signature: string;
	verified: boolean;
	secUid: string;
	secret: boolean;
	ftc: boolean;
	relation: number;
	openFavorite: boolean;
	commentSetting: number;
	duetSetting: number;
	stitchSetting: number;
	privateAccount: boolean;
	isADVirtual: boolean;
};

type AuthorStats = {
	followingCount: number;
	followerCount: number;
	heartCount: number;
	videoCount: number;
	diggCount: number;
	heart: number;
};

type Challenge = {
	id: string;
	title: string;
	desc: string;
	profileThumb: string;
	profileMedium: string;
	profileLarger: string;
	coverThumb: string;
	coverMedium: string;
	coverLarger: string;
	isCommerce: boolean;
};

type DuetInfo = {
	duetFromId: string;
};

type Music = {
	id: string;
	title: string;
	playUrl: string;
	coverThumb: string;
	coverMedium: string;
	coverLarge: string;
	authorName: string;
	original: boolean;
	duration: number;
	album: string;
};

type Stats = {
	diggCount: number;
	shareCount: number;
	commentCount: number;
	playCount: number;
};

type StickersOnItem = {
	stickerType: number;
	stickerText: string[];
};

type TextExtra = {
	awemeId: string;
	start: number;
	end: number;
	hashtagName: string;
	hashtagId: string;
	type: number;
	userId: string;
	isCommerce: boolean;
	userUniqueId: string;
	secUid: string;
	subType: number;
};

type Video = {
	id: string;
	height: number;
	width: number;
	duration: number;
	ratio: string;
	cover: string;
	originCover: string;
	dynamicCover: string;
	playAddr: string;
	downloadAddr: string;
	shareCover: string[];
	reflowCover: string;
	bitrate: number;
	encodedType: string;
	format: string;
	videoQuality: string;
	encodeUserTag: string;
	codecType: string;
	definition: string;
};

type ShareMeta = {
	title: string;
	desc: string;
};

export type ShazamResponse = DeepReadonly<{
	matches: Match[];
	timestamp: number;
	timezone: string;
	tagid: string;
	track?: Track;
}>;

type Match = {
	id: string;
	offset: number;
	channel: string;
	timeskew: number;
	frequencyskew: number;
};

type Track = {
	layout: string;
	type: string;
	key: string;
	title: string;
	subtitle: string;
	images?: TrackImages;
	share: Share;
	hub: Hub;
	url: string;
	artists: Artist[];
	isrc: string;
	genres: Genres;
	urlparams: Urlparams;
	myshazam: Myshazam;
	albumadamid: string;
	sections: Section[];
};

type Artist = {
	id: string;
	adamid: string;
};

type Genres = {
	primary: string;
};

type Hub = {
	type: string;
	image: string;
	actions: HubAction[];
	options: Option[];
	providers: Provider[];
	explicit: boolean;
	displayname: string;
};

type HubAction = {
	name?: string;
	type: string;
	id?: string;
	uri?: string;
	share?: Share;
};

type Share = {
	subject: string;
	text: string;
	href: string;
	image: string;
	twitter: string;
	html: string;
	avatar: string;
	snapchat: string;
};

type Option = {
	caption: string;
	actions: HubAction[];
	beacondata: OptionBeacondata;
	image: string;
	type: string;
	listcaption: string;
	overflowimage: string;
	colouroverflowimage: boolean;
	providername: string;
};

type OptionBeacondata = {
	type: string;
	providername: string;
};

type Provider = {
	caption: string;
	images: ProviderImages;
	actions: HubAction[];
	type: string;
};

type ProviderImages = {
	overflow: string;
	default: string;
};

type TrackImages = {
	background: string;
	coverart: string;
	coverarthq: string;
	joecolor: string;
};

type Myshazam = {
	apple: Apple;
};

type Apple = {
	actions: HubAction[];
};

type Section = {
	type: string;
	metapages?: Metapage[];
	tabname: string;
	metadata?: Metadatum[];
	text?: string[];
	footer?: string;
	beacondata?: SectionBeacondata;
	youtubeurl?: Youtubeurl;
	avatar?: string;
	id?: string;
	name?: string;
	verified?: boolean;
	actions?: SectionAction[];
};

type SectionAction = {
	type: string;
	id: string;
};

type SectionBeacondata = {
	lyricsid: string;
	providername: string;
	commontrackid: string;
};

type Metadatum = {
	title: string;
	text: string;
};

type Metapage = {
	image: string;
	caption: string;
};

type Youtubeurl = {
	caption: string;
	image: Image;
	actions: HubAction[];
};

type Image = {
	dimensions: Dimensions;
	url: string;
};

type Dimensions = {
	width: number;
	height: number;
};

type Urlparams = {
	'{tracktitle}': string;
	'{trackartist}': string;
};
