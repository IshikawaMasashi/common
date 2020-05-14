/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { types } from '../../../src';

describe('Types', () => {
  test('isFunction', () => {
    expect(!types.isFunction(undefined)).toBeTruthy();
    expect(!types.isFunction(null)).toBeTruthy();
    expect(!types.isFunction('foo')).toBeTruthy();
    expect(!types.isFunction(5)).toBeTruthy();
    expect(!types.isFunction(true)).toBeTruthy();
    expect(!types.isFunction([])).toBeTruthy();
    expect(!types.isFunction([1, 2, '3'])).toBeTruthy();
    expect(!types.isFunction({})).toBeTruthy();
    expect(!types.isFunction({ foo: 'bar' })).toBeTruthy();
    expect(!types.isFunction(/test/)).toBeTruthy();
    expect(!types.isFunction(new RegExp(''))).toBeTruthy();
    expect(!types.isFunction(new Date())).toBeTruthy();

    // expect(types.isFunction(assert));
    expect(
      types.isFunction(function foo() {
        /**/
      })
    ).toBeTruthy();
  });

  test('areFunctions', () => {
    expect(!types.areFunctions()).toBeTruthy();
    expect(!types.areFunctions(null)).toBeTruthy();
    expect(!types.areFunctions('foo')).toBeTruthy();
    expect(!types.areFunctions(5)).toBeTruthy();
    expect(!types.areFunctions(true)).toBeTruthy();
    expect(!types.areFunctions([])).toBeTruthy();
    expect(!types.areFunctions([1, 2, '3'])).toBeTruthy();
    expect(!types.areFunctions({})).toBeTruthy();
    expect(!types.areFunctions({ foo: 'bar' })).toBeTruthy();
    expect(!types.areFunctions(/test/)).toBeTruthy();
    expect(!types.areFunctions(new RegExp(''))).toBeTruthy();
    expect(!types.areFunctions(new Date())).toBeTruthy();
    // expect(!types.areFunctions(assert, ''));

    // expect(types.areFunctions(assert));
    // expect(types.areFunctions(assert, assert));
    expect(
      types.areFunctions(function foo() {
        /**/
      })
    ).toBeTruthy();
  });

  test('isObject', () => {
    expect(!types.isObject(undefined)).toBeTruthy();
    expect(!types.isObject(null)).toBeTruthy();
    expect(!types.isObject('foo')).toBeTruthy();
    expect(!types.isObject(5)).toBeTruthy();
    expect(!types.isObject(true)).toBeTruthy();
    expect(!types.isObject([])).toBeTruthy();
    expect(!types.isObject([1, 2, '3'])).toBeTruthy();
    expect(!types.isObject(/test/)).toBeTruthy();
    expect(!types.isObject(new RegExp(''))).toBeTruthy();
    expect(!types.isFunction(new Date())).toBeTruthy();
    // expect(!types.isObject(assert)).toBeTruthy();
    expect(!types.isObject(function foo() {})).toBeTruthy();

    expect(types.isObject({})).toBeTruthy();
    expect(types.isObject({ foo: 'bar' })).toBeTruthy();
  });

  //   test('isEmptyObject', () => {
  //     assert(!types.isEmptyObject(undefined));
  //     assert(!types.isEmptyObject(null));
  //     assert(!types.isEmptyObject('foo'));
  //     assert(!types.isEmptyObject(5));
  //     assert(!types.isEmptyObject(true));
  //     assert(!types.isEmptyObject([]));
  //     assert(!types.isEmptyObject([1, 2, '3']));
  //     assert(!types.isEmptyObject(/test/));
  //     assert(!types.isEmptyObject(new RegExp('')));
  //     assert(!types.isEmptyObject(new Date()));
  //     assert(!types.isEmptyObject(assert));
  //     assert(
  //       !types.isEmptyObject(function foo() {
  //         /**/
  //       })
  //     );
  //     assert(!types.isEmptyObject({ foo: 'bar' }));

  //     assert(types.isEmptyObject({}));
  //   });

  //   test('isArray', () => {
  //     assert(!types.isArray(undefined));
  //     assert(!types.isArray(null));
  //     assert(!types.isArray('foo'));
  //     assert(!types.isArray(5));
  //     assert(!types.isArray(true));
  //     assert(!types.isArray({}));
  //     assert(!types.isArray(/test/));
  //     assert(!types.isArray(new RegExp('')));
  //     assert(!types.isArray(new Date()));
  //     assert(!types.isArray(assert));
  //     assert(
  //       !types.isArray(function foo() {
  //         /**/
  //       })
  //     );
  //     assert(!types.isArray({ foo: 'bar' }));

  //     assert(types.isArray([]));
  //     assert(types.isArray([1, 2, '3']));
  //   });

  //   test('isString', () => {
  //     assert(!types.isString(undefined));
  //     assert(!types.isString(null));
  //     assert(!types.isString(5));
  //     assert(!types.isString([]));
  //     assert(!types.isString([1, 2, '3']));
  //     assert(!types.isString(true));
  //     assert(!types.isString({}));
  //     assert(!types.isString(/test/));
  //     assert(!types.isString(new RegExp('')));
  //     assert(!types.isString(new Date()));
  //     assert(!types.isString(assert));
  //     assert(
  //       !types.isString(function foo() {
  //         /**/
  //       })
  //     );
  //     assert(!types.isString({ foo: 'bar' }));

  //     assert(types.isString('foo'));
  //   });

  //   test('isNumber', () => {
  //     assert(!types.isNumber(undefined));
  //     assert(!types.isNumber(null));
  //     assert(!types.isNumber('foo'));
  //     assert(!types.isNumber([]));
  //     assert(!types.isNumber([1, 2, '3']));
  //     assert(!types.isNumber(true));
  //     assert(!types.isNumber({}));
  //     assert(!types.isNumber(/test/));
  //     assert(!types.isNumber(new RegExp('')));
  //     assert(!types.isNumber(new Date()));
  //     assert(!types.isNumber(assert));
  //     assert(
  //       !types.isNumber(function foo() {
  //         /**/
  //       })
  //     );
  //     assert(!types.isNumber({ foo: 'bar' }));
  //     assert(!types.isNumber(parseInt('A', 10)));

  //     assert(types.isNumber(5));
  //   });

  //   test('isUndefined', () => {
  //     assert(!types.isUndefined(null));
  //     assert(!types.isUndefined('foo'));
  //     assert(!types.isUndefined([]));
  //     assert(!types.isUndefined([1, 2, '3']));
  //     assert(!types.isUndefined(true));
  //     assert(!types.isUndefined({}));
  //     assert(!types.isUndefined(/test/));
  //     assert(!types.isUndefined(new RegExp('')));
  //     assert(!types.isUndefined(new Date()));
  //     assert(!types.isUndefined(assert));
  //     assert(
  //       !types.isUndefined(function foo() {
  //         /**/
  //       })
  //     );
  //     assert(!types.isUndefined({ foo: 'bar' }));

  //     assert(types.isUndefined(undefined));
  //   });

  //   test('isUndefinedOrNull', () => {
  //     assert(!types.isUndefinedOrNull('foo'));
  //     assert(!types.isUndefinedOrNull([]));
  //     assert(!types.isUndefinedOrNull([1, 2, '3']));
  //     assert(!types.isUndefinedOrNull(true));
  //     assert(!types.isUndefinedOrNull({}));
  //     assert(!types.isUndefinedOrNull(/test/));
  //     assert(!types.isUndefinedOrNull(new RegExp('')));
  //     assert(!types.isUndefinedOrNull(new Date()));
  //     assert(!types.isUndefinedOrNull(assert));
  //     assert(
  //       !types.isUndefinedOrNull(function foo() {
  //         /**/
  //       })
  //     );
  //     assert(!types.isUndefinedOrNull({ foo: 'bar' }));

  //     assert(types.isUndefinedOrNull(undefined));
  //     assert(types.isUndefinedOrNull(null));
  //   });

  //   test('assertIsDefined / assertAreDefined', () => {
  //     assert.throws(() => types.assertIsDefined(undefined));
  //     assert.throws(() => types.assertIsDefined(null));
  //     assert.throws(() => types.assertAllDefined(null, undefined));
  //     assert.throws(() => types.assertAllDefined(true, undefined));
  //     assert.throws(() => types.assertAllDefined(undefined, false));

  //     assert.equal(types.assertIsDefined(true), true);
  //     assert.equal(types.assertIsDefined(false), false);
  //     assert.equal(types.assertIsDefined('Hello'), 'Hello');
  //     assert.equal(types.assertIsDefined(''), '');

  //     const res = types.assertAllDefined(1, true, 'Hello');
  //     assert.equal(res[0], 1);
  //     assert.equal(res[1], true);
  //     assert.equal(res[2], 'Hello');
  //   });

  //   test('validateConstraints', () => {
  //     types.validateConstraints([1, 'test', true], [Number, String, Boolean]);
  //     types.validateConstraints(
  //       [1, 'test', true],
  //       ['number', 'string', 'boolean']
  //     );
  //     types.validateConstraints([console.log], [Function]);
  //     types.validateConstraints([undefined], [types.isUndefined]);
  //     types.validateConstraints([1], [types.isNumber]);

  //     class Foo {}
  //     types.validateConstraints([new Foo()], [Foo]);

  //     function isFoo(f: any) {}
  //     assert.throws(() => types.validateConstraints([new Foo()], [isFoo]));

  //     function isFoo2(f: any) {
  //       return true;
  //     }
  //     types.validateConstraints([new Foo()], [isFoo2]);

  //     assert.throws(() =>
  //       types.validateConstraints([1, true], [types.isNumber, types.isString])
  //     );
  //     assert.throws(() => types.validateConstraints(['2'], [types.isNumber]));
  //     assert.throws(() =>
  //       types.validateConstraints([1, 'test', true], [Number, String, Number])
  //     );
  //   });
});
