var firstName="Ranjith";
var lastName="Kumar";
var fullName=(firstName+" "+lastName);
console.log(fullName);

function myblog(){
    console.log(firstName);
    let no=9500351800;
    console.log(no);
}
myblog();
/*

//.......EXECUTION CONTECXT.......//

///=====>>GLOBAL EXECUTION CONTECT

//===>CREATION PHASE FOR GLOBAL EXECUTIVE CONTEXT
{
  "executionContext": {
    "globalExecutionContext": {
      "creationPhase": {
        "variables": {
        "environmentRecord": {
          "type": "Global Environment",
          "scope": "Global",
          "bindings": {
            "firstName": "undefined",
            "lastName": "undefined",
            "fullName": "undefined",
            "myblog": "function myblog() {...}"
          }
        },
        "thisBinding": {
          "value": "global object (window in browsers or global in Node.js)"
        }
      }


      //===>> EXECUTION PHASE FOR GLOBAL EXECUTIVE CONTEXT

      "executionPhase": {
        "environmentRecord": {
          "type": "Global Environment",
          "scope": "Global",
          "bindings": {
            "firstName": "Ranjith",
            "lastName": "Kumar",
            "fullName": "Ranjith Kumar",
            "myblog": "function myblog() {...}"
          }
        },
        "thisBinding": {
          "value": "global object (window in browsers or global in Node.js)"
        },
        "functionCall": {
          "myblog": {
            "status": "called",
            "context": "functionExecutionContext"
          }
        }
      }
    },




    //......FUNCTION  EXECUTION CONTEXT......//

//===> CREATION PHASE FOR FUNCTION EXECUTIVE CONTEXT

    "functionExecutionContext": {
      "myblog": {
        "creationPhase": {
          "variables": {
            "no": "undefined"
          },
          "outerScopeAccess": {
            "firstName": "Ranjith"
          },
          "hoisting": {
            "no": "hoisted as undefined"
          },
          "environmentRecord": {
            "type": "Function Environment",
            "scope": "Function Scope",
            "bindings": {
              "no": "undefined",
              "outerScopeAccess": {
                "firstName": "Ranjith"
              }
            }
          },
          "thisBinding": {
            "value": "undefined (in strict mode) or global object (in non-strict mode)"
          }
        },

        //====> EXECUTION PHASE FOR FUNCTION EXECUTIVE CONTEXT.

        "executionPhase": {
          "variables": {
            "no": 9500351800
          },
          {
          "environmentRecord": {
            "type": "Function Environment",
            "scope": "Function Scope",
            "bindings": {
              "no": 9500351800,
              "outerScopeAccess": {
                "firstName": "Ranjith"
              }
            }
          },
          "thisBinding": {
            "value": "undefined (in strict mode) or global object (in non-strict mode)"
          }
        }
      }
    }
 

 */