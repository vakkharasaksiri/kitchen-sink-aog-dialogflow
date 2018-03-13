/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Api from '../../api/v2'
import { SoloQuestion } from './question'

/** @public */
export type RegisterUpdateArgument = Api.GoogleActionsV2RegisterUpdateValue

/** @public */
export interface RegisterUpdateOptions {
  /** @public */
  intent: string

  /** @public */
  arguments: Api.GoogleActionsV2Argument[]

  /** @public */
  frequency: Api.GoogleActionsV2TriggerContextTimeContextFrequency
}

/** @public */
export class RegisterUpdate extends SoloQuestion {
  constructor(options: RegisterUpdateOptions) {
    super('actions.intent.REGISTER_UPDATE')

    this.data<Api.GoogleActionsV2RegisterUpdateValueSpec>(
      'type.googleapis.com/google.actions.v2.RegisterUpdateValueSpec', {
        intent: options.intent,
        arguments: options.arguments,
        triggerContext: {
          timeContext: {
            frequency: options.frequency,
          },
        },
      },
    )
  }
}