$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ExcelReader.feature");
formatter.feature({
  "line": 2,
  "name": "User add personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TextBoxPage"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to enter personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on element page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User successfully navigate to element page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click on TextBox page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User able to navigate to TextBox page successfully and see address verification page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter \"\u003cFullName\u003e\" fullName",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter \"\u003cEmail\u003e\" Email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cCurrentAddress\u003e\" Current Address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User  enter \"\u003cpermanentAddress\u003e\" Permanent Address",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User able to see required data add successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;",
  "rows": [
    {
      "cells": [
        "FullName",
        "Email",
        "CurrentAddress",
        "permanentAddress"
      ],
      "line": 17,
      "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;1"
    },
    {
      "cells": [
        "Sam",
        "test2@gmail.com",
        "123, The mall, Watford, WD19 7EB",
        "456, Harrow Road, Watford, WD19 5AB"
      ],
      "line": 18,
      "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;2"
    },
    {
      "cells": [
        "Aam",
        "test3@gmail.com",
        "124, The mall, Watford, WD19 7EB",
        "457, Harrow Road, Watford, WD19 5AB"
      ],
      "line": 19,
      "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4222799,
  "error_message": "java.lang.NullPointerException\r\n\tat org.example.BrowserManager.setBrowser(BrowserManager.java:14)\r\n\tat org.example.Hooks.openBrowser(Hooks.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to enter personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TextBoxPage"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on element page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User successfully navigate to element page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click on TextBox page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User able to navigate to TextBox page successfully and see address verification page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter \"Sam\" fullName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter \"test2@gmail.com\" Email",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"123, The mall, Watford, WD19 7EB\" Current Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User  enter \"456, Harrow Road, Watford, WD19 5AB\" Permanent Address",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User able to see required data add successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_element_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_successfully_navigate_to_element_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_TextBox_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_navigate_to_TextBox_page_successfully_and_see_address_verification_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_fullName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test2@gmail.com",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123, The mall, Watford, WD19 7EB",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Current_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "456, Harrow Road, Watford, WD19 5AB",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enter_Permanent_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_submit_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_see_required_data_add_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 224100,
  "status": "passed"
});
formatter.before({
  "duration": 151700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.example.BrowserManager.setBrowser(BrowserManager.java:14)\r\n\tat org.example.Hooks.openBrowser(Hooks.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to enter personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TextBoxPage"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on element page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User successfully navigate to element page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click on TextBox page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User able to navigate to TextBox page successfully and see address verification page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter \"Aam\" fullName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter \"test3@gmail.com\" Email",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"124, The mall, Watford, WD19 7EB\" Current Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User  enter \"457, Harrow Road, Watford, WD19 5AB\" Permanent Address",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User able to see required data add successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_element_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_successfully_navigate_to_element_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_TextBox_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_navigate_to_TextBox_page_successfully_and_see_address_verification_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Aam",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_fullName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test3@gmail.com",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "124, The mall, Watford, WD19 7EB",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Current_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "457, Harrow Road, Watford, WD19 5AB",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enter_Permanent_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_submit_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_see_required_data_add_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25100,
  "status": "passed"
});
});