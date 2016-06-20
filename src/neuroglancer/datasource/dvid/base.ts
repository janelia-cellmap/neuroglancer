/**
 * @license
 * Copyright 2016 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface DVIDSourceParameters {
  baseUrls: string[];
  nodeKey: string;
  dataInstanceKey: string;
};

export interface VolumeChunkSourceParameters extends DVIDSourceParameters {
  level: string;
};

export enum TileEncoding {
  JPEG
};

export interface TileChunkSourceParameters extends DVIDSourceParameters {
  dims: string;
  level: string;
  encoding: TileEncoding;
};

export function volumeSourceToString(parameters: VolumeChunkSourceParameters) {
  return `dvid:volume:${parameters['baseUrls'][0]}/${parameters['nodeKey']}/${parameters['dataInstanceKey']}/${parameters['level']}`;
}

export function tileSourceToString(parameters: TileChunkSourceParameters) {
  return `dvid:volume:${parameters['baseUrls'][0]}/${parameters['nodeKey']}/${parameters['dataInstanceKey']}/${parameters['dims']}/${parameters['level']}/${TileEncoding[parameters['encoding']]}`;
}
