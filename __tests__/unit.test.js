// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// IS PHONE NUMBER TESTS
test("Valid phone number with dashes", () => {
  expect(isPhoneNumber("123-123-1234")).toBe(true);
});

test("Valid phone number with parathesis", () => {
  expect(isPhoneNumber("(123) 123-1234")).toBe(true);
});

test("inValid phone number with letters", () => {
  expect(isPhoneNumber("abc-abc-abcd")).toBe(false);
});

test("inValid phone number too lobg", () => {
  expect(isPhoneNumber("123412342342341111111")).toBe(false);
});

// IS EMAIL TESTS
test("Valid email with gmail", () => {
  expect(isEmail("thanhpro232@gmail.com")).toBe(true);
});

test("Valid email with ucsd edu email", () => {
  expect(isEmail("tvhoang@ucsd.edu")).toBe(true);
});

test("inValid email with no @", () => {
  expect(isEmail("randomemial.com")).toBe(false);
});

test("inValid email with no domain", () => {
  expect(isEmail("nodomain@.com")).toBe(false);
});

// ISSTRONG PASSWORD TESTS
test("Valid password with capital letter infront and more then 4", () => {
  expect(isStrongPassword("Bobby2")).toBe(true);
});

test("Valid password with less than 15 characters and same rule", () => {
  expect(isStrongPassword("Lesly1222333")).toBe(true);
});

test("inValid password starting with digit", () => {
  expect(isStrongPassword("4asdasd")).toBe(false);
});

test("inValid password taht is too long", () => {
  expect(isStrongPassword("LONGGGGGGGGGGGGGGGGGGGGGGGG")).toBe(false);
});

// IS DATE TESTS
test("Valid date with single month and single day", () => {
  expect(isDate("2/3/2003")).toBe(true);
});

test("Valid date with double digit month and day", () => {
  expect(isDate("11/17/2003")).toBe(true);
});

test("inValid date with wrong format", () => {
  expect(isDate("2003/11/23")).toBe(false);
});

test("inValid date with no dashes", () => {
  expect(isDate("11172003")).toBe(false);
});

// IS HEX COLORS TESTS
test("Valid hex color as chars", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test("Valid hext colors as numbers", () => {
  expect(isHexColor("#111")).toBe(true);
});

test("inValid hex color that is too long", () => {
  expect(isHexColor("#123123123123")).toBe(false);
});

test("inValid hex colors that is not in hexdecimals", () => {
  expect(isHexColor("#XQYZZ")).toBe(false);
});