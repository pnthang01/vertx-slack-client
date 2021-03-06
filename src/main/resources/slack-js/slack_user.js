/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module slack-js/slack_user */
var utils = require('vertx-js/util/utils');
var IMObject = require('slack-js/im_object');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSlackUser = com.julienviet.slack.SlackUser;

/**

 @class
*/
var SlackUser = function(j_val) {

  var j_slackUser = j_val;
  var that = this;

  /**

   @public

   @return {string}
   */
  this.id = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["id()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string}
   */
  this.name = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["name()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.profile = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_slackUser["profile()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.isAdmin = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["isAdmin()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.isOwner = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["isOwner()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.isPrimaryOwner = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["isPrimaryOwner()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.isRestricted = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["isRestricted()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.isUltraRestricted = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["isUltraRestricted()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.has2fa = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["has2fa()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string}
   */
  this.twoFactorType = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["twoFactorType()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.hasFiles = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_slackUser["hasFiles()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.getOrCreateIM = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_slackUser["getOrCreateIM(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(ar.result(), IMObject), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_slackUser;
};

// We export the Constructor function
module.exports = SlackUser;