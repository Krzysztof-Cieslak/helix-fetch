/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env mocha */

'use strict';

const assert = require('assert');
const { fetch } = require('../src/index.js');

describe('Fetch Tests', () => {
  it('fetch supports http/2', async () => {
    const resp = await fetch('https://www.project-helix.info/index.html');
    // TODO: check pushed resource
    // TODO: check cache
    assert.equal(resp.status, 200);
  });
});
