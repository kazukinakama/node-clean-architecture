export type SampleGetRequest = {
  data?: string;
};

export type SampleCreateRequest = {
  data: string;
};

export type SampleUpdateRequest = {
  data: string;
};

export type SampleItemResponse = {
  id: number;
  data: string;
};

export type SampleItemsResponse = {
  id: number;
  data: string;
}[];
