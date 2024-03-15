# Project Name

Public version SSO Between SSR Apps and React Apps

## Overview

This project contains two web apps that use okta middleware library to handle the user sesion, but to authenticate they need to redirect to any of the digital id apps that are able to connect with an okta tenant and create a session. Then the webapps use this session to authenticate.

## Apps

This project contains the following apps:

1. [DigitalId](Port:8080): ReactApp that is able to connect with okta and create a session.
2. [DigitalId2](Port:9080): ReactApp that is able to connect with okta and create a session.
3. [Webapp](Port:3030): Webapp that redirects to digitalId to create a session.
4. [Webapp2](Port:4030): Webapp that redirects to digitalId2 to create a session.
5. [App 5 Name](Port:5050): Webapp that redirects to digitalId2 to create a session.

## Installation

You can npm install and npm run dev each project

## Usage

You need to set env files with the required information of your okta apps, and set the required redirect_Uri in the apps in your tenant.


