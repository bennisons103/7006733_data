const quizData = {
  "quiz": [
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "According to the stock allocation priority hierarchy in BIWMS, which requirement is satisfied first when new stock becomes available?",
      "answerOptions": [
        {
          "text": "Trident Low Stock (TLS) Earmark",
          "rationale": "The documentation states that when stock becomes available, the TLS Earmark always takes priority over all other allocations to maintain Continuous at Sea Deterrence.",
          "isCorrect": true
        },
        {
          "text": "High priority back orders",
          "rationale": "While important, high priority back orders are satisfied after TLS Earmark requirements have been met.",
          "isCorrect": false
        },
        {
          "text": "Contingent Operational Stock (COS) Earmarks",
          "rationale": "COS Earmarks are prioritized below TLS Earmarks and high priority back orders in the stock allocation sequence.",
          "isCorrect": false
        },
        {
          "text": "General Earmarks",
          "rationale": "General Earmarks, created for purposes like planned modifications, are ranked lower in priority for stock allocation than TLS and COS Earmarks.",
          "isCorrect": false
        }
      ],
      "hint": "Consider the requirement mandated to ensure a TRIDENT submarine is always on patrol."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "An Inventory Manager (IM) needs to use stock allocated to a TLS Earmark for a non-Trident purpose. What is the required authorization process?",
      "answerOptions": [
        {
          "text": "The IM can directly issue the stock using the TI-ISSUE_TO_DEMAND workflow.",
          "rationale": "This workflow is reserved for the TLS Manager and can only be used for non-Trident demands after a specific authorization is received.",
          "isCorrect": false
        },
        {
          "text": "Approval must be granted by the Fleet Operations Maintenance Officer (FOMO) and then processed by the SSBN OBD Team.",
          "rationale": "The process explicitly requires FOMO agreement, which is then passed to the SSBN OBD Team to process the Part Request, as IMs cannot action this themselves.",
          "isCorrect": true
        },
        {
          "text": "The IM must send a request to the COS Team to reallocate the stock between Earmarks.",
          "rationale": "The COS Team manages Contingent Operational Stock, not Trident Low Stock, which has its own strict control procedures.",
          "isCorrect": false
        },
        {
          "text": "The stock must first be moved to a General Earmark using the EM-STOCK TRANSFER workflow before it can be issued.",
          "rationale": "Directly transferring stock from a TLS Earmark is highly restricted and requires a level of authorization beyond a standard workflow.",
          "isCorrect": false
        }
      ],
      "hint": "Think about the special permissions and roles involved in managing mission-critical TRIDENT stock."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "Which setting on a General Earmark ensures that its allocated stock is excluded from the daily automatic stock reallocation process?",
      "answerOptions": [
        {
          "text": "Auto Issue",
          "rationale": "The 'Auto Issue' indicator controls whether BIWMS automatically creates a Task Issue on the Release Date, not whether the stock is protected from reallocation.",
          "isCorrect": false
        },
        {
          "text": "Packed",
          "rationale": "The 'Packed' checkbox sets the Earmark and its associated CSM to a Packed status, which removes them from reallocation, but 'Protected' is the specific attribute for this function on a General Earmark.",
          "isCorrect": false
        },
        {
          "text": "Protected",
          "rationale": "The source material specifies that when the 'Protected' attribute is set, stock allocated to that Earmark is excluded from the automatic stock reallocation process.",
          "isCorrect": true
        },
        {
          "text": "Retain",
          "rationale": "The 'Retain' option is used during a Task Issue to keep the Earmark active for attracting stock for any outstanding quantities; it does not prevent reallocation.",
          "isCorrect": false
        }
      ],
      "hint": "Look for the attribute that shields an Earmark's contents from being moved to satisfy other, higher-priority needs."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "What is the key difference between how General Earmarks and COS Earmarks are issued?",
      "answerOptions": [
        {
          "text": "COS Earmarks are issued automatically on their Release Date, while General Earmarks must be issued manually.",
          "rationale": "This reverses the actual process; General Earmarks are the ones that can be configured for automatic issue.",
          "isCorrect": false
        },
        {
          "text": "General Earmarks can be set for automatic Task Issue, whereas COS Earmarks must always be issued manually.",
          "rationale": "The documentation explicitly states that General Earmarks can be set to issue automatically, but COS Earmarks must be manually Task Issued.",
          "isCorrect": true
        },
        {
          "text": "Only COS Earmarks can be partially issued if the 'Allow Partial Issue' checkbox is selected.",
          "rationale": "The 'Allow Partial Issue' attribute is a feature available for General Earmarks that are set to 'Auto Issue'.",
          "isCorrect": false
        },
        {
          "text": "General Earmarks are issued via the Item Workbench, while COS Earmarks are issued from the Stock Modules screen.",
          "rationale": "Both types of Earmarks are issued via a Task Issue process that originates from the Earmark Maintenance screen within Stock Modules.",
          "isCorrect": false
        }
      ],
      "hint": "Consider which Earmark type supports a hands-off, system-driven process versus one that requires user intervention."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "A COS Earmark is created based on, and can only contain, which of the following?",
      "answerOptions": [
        {
          "text": "A collection of parts added directly by the Inventory Manager.",
          "rationale": "Parts cannot be added directly to a COS Earmark; they must be part of the underlying module that the Earmark is based on.",
          "isCorrect": false
        },
        {
          "text": "A single Central Stock Module (CSM).",
          "rationale": "The procedure guide states that a COS Earmark relates to, and can only contain, one CSM. All parts and SSMs must be managed within that CSM.",
          "isCorrect": true
        },
        {
          "text": "One or more active Standard Stock Modules (SSMs).",
          "rationale": "While a CSM contains SSMs, the Earmark itself is linked directly to the single, overarching CSM, not the individual SSMs.",
          "isCorrect": false
        },
        {
          "text": "An existing General Earmark that is converted to a COS Earmark.",
          "rationale": "General and COS Earmarks are distinct types with different creation processes; one cannot be converted into the other.",
          "isCorrect": false
        }
      ],
      "hint": "Think about the hierarchical structure of Contingent Operational Stocks, where smaller modules build up into a larger one that the Earmark represents."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "If an Inventory Manager needs to manually transfer stock between two different General Earmarks, which workflow must be used?",
      "answerOptions": [
        {
          "text": "Move Out > Issue > MI-DEPOT TO DEPOT",
          "rationale": "This workflow is used for transferring stock between two depot locations, not between two logical Earmarks.",
          "isCorrect": false
        },
        {
          "text": "Disposition > Shipment > DR-ISSUE TO EXT ORG",
          "rationale": "This workflow is part of the disposition process for sending items to an external organization, not for reallocating Earmarked stock.",
          "isCorrect": false
        },
        {
          "text": "Move Out > Issue > EM-STOCK TRANSFER",
          "rationale": "The user guides specify that the EM-STOCK TRANSFER workflow is the correct procedure for manually moving stock between General Earmarks.",
          "isCorrect": true
        },
        {
          "text": "Create a Task Issue from the source Earmark and cancel the destination Earmark.",
          "rationale": "A Task Issue sends stock to a consignee; it is not the correct process for transferring stock between two existing Earmarks.",
          "isCorrect": false
        }
      ],
      "hint": "From the Item Workbench, look for a 'Move Out' option that specifically mentions a transfer related to Earmarks."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "What is the primary function of the 'Clone' option when creating a manual Task Issue for an Earmark?",
      "answerOptions": [
        {
          "text": "It re-issues the same Task Issue again after a set period.",
          "rationale": "This describes a recurring issue, which is not the function of the 'Clone' option.",
          "isCorrect": false
        },
        {
          "text": "It creates a new, identical Earmark with an increased version number after the issue is complete.",
          "rationale": "The documentation states that 'Clone' duplicates the Earmark for another purpose, creating a new version with the original liabilities.",
          "isCorrect": true
        },
        {
          "text": "It keeps the original Earmark open to attract stock for any unfulfilled liabilities.",
          "rationale": "This describes the function of the 'Retain' option, not the 'Clone' option.",
          "isCorrect": false
        },
        {
          "text": "It creates a backup of the Task Issue voucher for audit purposes.",
          "rationale": "Cloning refers to the Earmark itself, not the Task Issue documentation.",
          "isCorrect": false
        }
      ],
      "hint": "This follow-on option is used when you need to immediately create a copy of the Earmark for a new, separate purpose."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "Who is authorized to amend or create Trident Low Stock (TLS) Earmarks?",
      "answerOptions": [
        {
          "text": "The Inventory Manager (IM) responsible for the part.",
          "rationale": "The guides explicitly state that Inventory Managers cannot amend TLS Earmarks and must contact a specific team for any required changes.",
          "isCorrect": false
        },
        {
          "text": "The SSBN OBD Team.",
          "rationale": "The documentation specifies that TLS Earmarks cannot be amended by IMs and that such actions must be handled by the SSBN OBD Team.",
          "isCorrect": true
        },
        {
          "text": "The COS (Contingent Operational Stock) Team.",
          "rationale": "The COS Team manages COS Earmarks for land operations, which is a separate process and responsibility from TLS Earmarking.",
          "isCorrect": false
        },
        {
          "text": "Any user with Business Administrator (BA) permissions.",
          "rationale": "While BAs have elevated permissions, the management of TLS Earmarks is restricted to a specific functional team due to its critical nature.",
          "isCorrect": false
        }
      ],
      "hint": "Consider the specialized team responsible for submarine documentation and provisioning."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "When a General Earmark is 'Closed' in BIWMS, what is the effect on a linked 'Open' Acquisition Request (AR)?",
      "answerOptions": [
        {
          "text": "The AR is automatically cancelled.",
          "rationale": "An 'Unauthorised' AR would be cancelled, but an 'Open' AR, which represents a firm commitment, is handled differently.",
          "isCorrect": false
        },
        {
          "text": "The AR is delinked and remains as a Dues In to MoD.",
          "rationale": "The procedure guide states that when an Earmark is closed, an Open AR is delinked and remains a Dues In, with the stock becoming 'Available Stock' upon arrival.",
          "isCorrect": true
        },
        {
          "text": "The AR is automatically re-linked to the next highest priority Earmark.",
          "rationale": "The system does not automatically re-link the AR; the resulting stock becomes available for general allocation.",
          "isCorrect": false
        },
        {
          "text": "An alert is sent to the Inventory Manager to manually satisfy the AR.",
          "rationale": "No manual satisfaction is required; the AR simply becomes a general due-in for stock rather than being tied to a specific Earmark.",
          "isCorrect": false
        }
      ],
      "hint": "Think about what happens to a firm order when the specific reservation it was for is no longer needed."
    },
    {
      "category": "Earmarks",
      "Level": "Standard",
      "question": "What happens if a manual Task Issue is initiated for a General Earmark containing parts that are subject to management control?",
      "answerOptions": [
        {
          "text": "The Task Issue will fail, and the Earmark will be set to a 'Draft' status.",
          "rationale": "The system allows the issue to proceed but requires additional steps; it does not fail it outright or change the Earmark status.",
          "isCorrect": false
        },
        {
          "text": "The system will automatically bypass the management control for Task Issues.",
          "rationale": "Management controls are not automatically bypassed; they are a critical safety and security feature that requires user justification to override.",
          "isCorrect": false
        },
        {
          "text": "A warning is displayed, and the user must provide justification in specific remarks fields to proceed.",
          "rationale": "The process guide explains that a warning icon appears, and upon clicking 'Finish', the user must record justification for overriding the control.",
          "isCorrect": true
        },
        {
          "text": "An alert is sent to the SSBN OBD Team for approval before the issue can be completed.",
          "rationale": "The SSBN OBD Team is associated with TLS stock, not general management controls on parts within a General Earmark.",
          "isCorrect": false
        }
      ],
      "hint": "Consider how the system handles overrides for safety- or supply-controlled items during a bulk issue process."
    }
  ]
  {
  "quiz": [
    {
      "category": "Earmarks",
      "question": "According to the stock allocation priority hierarchy in BIWMS, which requirement is satisfied first when new stock becomes available?",
      "answerOptions": [
        {
          "text": "Trident Low Stock (TLS) Earmark",
          "rationale": "The documentation states that when stock becomes available, the TLS Earmark always takes priority over all other allocations to maintain Continuous at Sea Deterrence.",
          "isCorrect": true
        },
        {
          "text": "High priority back orders",
          "rationale": "While important, high priority back orders are satisfied after TLS Earmark requirements have been met.",
          "isCorrect": false
        },
        {
          "text": "Contingent Operational Stock (COS) Earmarks",
          "rationale": "COS Earmarks are prioritized below TLS Earmarks and high priority back orders in the stock allocation sequence.",
          "isCorrect": false
        },
        {
          "text": "General Earmarks",
          "rationale": "General Earmarks, created for purposes like planned modifications, are ranked lower in priority for stock allocation than TLS and COS Earmarks.",
          "isCorrect": false
        }
      ],
      "hint": "Consider the requirement mandated to ensure a TRIDENT submarine is always on patrol."
    },
    {
      "category": "Earmarks",
      "question": "An Inventory Manager (IM) needs to use stock allocated to a TLS Earmark for a non-Trident purpose. What is the required authorization process?",
      "answerOptions": [
        {
          "text": "The IM can directly issue the stock using the TI-ISSUE_TO_DEMAND workflow.",
          "rationale": "This workflow is reserved for the TLS Manager and can only be used for non-Trident demands after a specific authorization is received.",
          "isCorrect": false
        },
        {
          "text": "Approval must be granted by the Fleet Operations Maintenance Officer (FOMO) and then processed by the SSBN OBD Team.",
          "rationale": "The process explicitly requires FOMO agreement, which is then passed to the SSBN OBD Team to process the Part Request, as IMs cannot action this themselves.",
          "isCorrect": true
        },
        {
          "text": "The IM must send a request to the COS Team to reallocate the stock between Earmarks.",
          "rationale": "The COS Team manages Contingent Operational Stock, not Trident Low Stock, which has its own strict control procedures.",
          "isCorrect": false
        },
        {
          "text": "The stock must first be moved to a General Earmark using the EM-STOCK TRANSFER workflow before it can be issued.",
          "rationale": "Directly transferring stock from a TLS Earmark is highly restricted and requires a level of authorization beyond a standard workflow.",
          "isCorrect": false
        }
      ],
      "hint": "Think about the special permissions and roles involved in managing mission-critical TRIDENT stock."
    },
    {
      "category": "Earmarks",
      "question": "Which setting on a General Earmark ensures that its allocated stock is excluded from the daily automatic stock reallocation process?",
      "answerOptions": [
        {
          "text": "Auto Issue",
          "rationale": "The 'Auto Issue' indicator controls whether BIWMS automatically creates a Task Issue on the Release Date, not whether the stock is protected from reallocation.",
          "isCorrect": false
        },
        {
          "text": "Packed",
          "rationale": "The 'Packed' checkbox sets the Earmark and its associated CSM to a Packed status, which removes them from reallocation, but 'Protected' is the specific attribute for this function on a General Earmark.",
          "isCorrect": false
        },
        {
          "text": "Protected",
          "rationale": "The source material specifies that when the 'Protected' attribute is set, stock allocated to that Earmark is excluded from the automatic stock reallocation process.",
          "isCorrect": true
        },
        {
          "text": "Retain",
          "rationale": "The 'Retain' option is used during a Task Issue to keep the Earmark active for attracting stock for any outstanding quantities; it does not prevent reallocation.",
          "isCorrect": false
        }
      ],
      "hint": "Look for the attribute that shields an Earmark's contents from being moved to satisfy other, higher-priority needs."
    },
    {
      "category": "Earmarks",
      "question": "What is the key difference between how General Earmarks and COS Earmarks are issued?",
      "answerOptions": [
        {
          "text": "COS Earmarks are issued automatically on their Release Date, while General Earmarks must be issued manually.",
          "rationale": "This reverses the actual process; General Earmarks are the ones that can be configured for automatic issue.",
          "isCorrect": false
        },
        {
          "text": "General Earmarks can be set for automatic Task Issue, whereas COS Earmarks must always be issued manually.",
          "rationale": "The documentation explicitly states that General Earmarks can be set to issue automatically, but COS Earmarks must be manually Task Issued.",
          "isCorrect": true
        },
        {
          "text": "Only COS Earmarks can be partially issued if the 'Allow Partial Issue' checkbox is selected.",
          "rationale": "The 'Allow Partial Issue' attribute is a feature available for General Earmarks that are set to 'Auto Issue'.",
          "isCorrect": false
        },
        {
          "text": "General Earmarks are issued via the Item Workbench, while COS Earmarks are issued from the Stock Modules screen.",
          "rationale": "Both types of Earmarks are issued via a Task Issue process that originates from the Earmark Maintenance screen within Stock Modules.",
          "isCorrect": false
        }
      ],
      "hint": "Consider which Earmark type supports a hands-off, system-driven process versus one that requires user intervention."
    },
    {
      "category": "Earmarks",
      "question": "A COS Earmark is created based on, and can only contain, which of the following?",
      "answerOptions": [
        {
          "text": "A collection of parts added directly by the Inventory Manager.",
          "rationale": "Parts cannot be added directly to a COS Earmark; they must be part of the underlying module that the Earmark is based on.",
          "isCorrect": false
        },
        {
          "text": "A single Central Stock Module (CSM).",
          "rationale": "The procedure guide states that a COS Earmark relates to, and can only contain, one CSM. All parts and SSMs must be managed within that CSM.",
          "isCorrect": true
        },
        {
          "text": "One or more active Standard Stock Modules (SSMs).",
          "rationale": "While a CSM contains SSMs, the Earmark itself is linked directly to the single, overarching CSM, not the individual SSMs.",
          "isCorrect": false
        },
        {
          "text": "An existing General Earmark that is converted to a COS Earmark.",
          "rationale": "General and COS Earmarks are distinct types with different creation processes; one cannot be converted into the other.",
          "isCorrect": false
        }
      ],
      "hint": "Think about the hierarchical structure of Contingent Operational Stocks, where smaller modules build up into a larger one that the Earmark represents."
    },
    {
      "category": "Earmarks",
      "question": "If an Inventory Manager needs to manually transfer stock between two different General Earmarks, which workflow must be used?",
      "answerOptions": [
        {
          "text": "Move Out > Issue > MI-DEPOT TO DEPOT",
          "rationale": "This workflow is used for transferring stock between two depot locations, not between two logical Earmarks.",
          "isCorrect": false
        },
        {
          "text": "Disposition > Shipment > DR-ISSUE TO EXT ORG",
          "rationale": "This workflow is part of the disposition process for sending items to an external organization, not for reallocating Earmarked stock.",
          "isCorrect": false
        },
        {
          "text": "Move Out > Issue > EM-STOCK TRANSFER",
          "rationale": "The user guides specify that the EM-STOCK TRANSFER workflow is the correct procedure for manually moving stock between General Earmarks.",
          "isCorrect": true
        },
        {
          "text": "Create a Task Issue from the source Earmark and cancel the destination Earmark.",
          "rationale": "A Task Issue sends stock to a consignee; it is not the correct process for transferring stock between two existing Earmarks.",
          "isCorrect": false
        }
      ],
      "hint": "From the Item Workbench, look for a 'Move Out' option that specifically mentions a transfer related to Earmarks."
    },
    {
      "category": "Earmarks",
      "question": "What is the primary function of the 'Clone' option when creating a manual Task Issue for an Earmark?",
      "answerOptions": [
        {
          "text": "It re-issues the same Task Issue again after a set period.",
          "rationale": "This describes a recurring issue, which is not the function of the 'Clone' option.",
          "isCorrect": false
        },
        {
          "text": "It creates a new, identical Earmark with an increased version number after the issue is complete.",
          "rationale": "The documentation states that 'Clone' duplicates the Earmark for another purpose, creating a new version with the original liabilities.",
          "isCorrect": true
        },
        {
          "text": "It keeps the original Earmark open to attract stock for any unfulfilled liabilities.",
          "rationale": "This describes the function of the 'Retain' option, not the 'Clone' option.",
          "isCorrect": false
        },
        {
          "text": "It creates a backup of the Task Issue voucher for audit purposes.",
          "rationale": "Cloning refers to the Earmark itself, not the Task Issue documentation.",
          "isCorrect": false
        }
      ],
      "hint": "This follow-on option is used when you need to immediately create a copy of the Earmark for a new, separate purpose."
    },
    {
      "category": "Earmarks",
      "question": "Who is authorized to amend or create Trident Low Stock (TLS) Earmarks?",
      "answerOptions": [
        {
          "text": "The Inventory Manager (IM) responsible for the part.",
          "rationale": "The guides explicitly state that Inventory Managers cannot amend TLS Earmarks and must contact a specific team for any required changes.",
          "isCorrect": false
        },
        {
          "text": "The SSBN OBD Team.",
          "rationale": "The documentation specifies that TLS Earmarks cannot be amended by IMs and that such actions must be handled by the SSBN OBD Team.",
          "isCorrect": true
        },
        {
          "text": "The COS (Contingent Operational Stock) Team.",
          "rationale": "The COS Team manages COS Earmarks for land operations, which is a separate process and responsibility from TLS Earmarking.",
          "isCorrect": false
        },
        {
          "text": "Any user with Business Administrator (BA) permissions.",
          "rationale": "While BAs have elevated permissions, the management of TLS Earmarks is restricted to a specific functional team due to its critical nature.",
          "isCorrect": false
        }
      ],
      "hint": "Consider the specialized team responsible for submarine documentation and provisioning."
    },
    {
      "category": "Earmarks",
      "question": "When a General Earmark is 'Closed' in BIWMS, what is the effect on a linked 'Open' Acquisition Request (AR)?",
      "answerOptions": [
        {
          "text": "The AR is automatically cancelled.",
          "rationale": "An 'Unauthorised' AR would be cancelled, but an 'Open' AR, which represents a firm commitment, is handled differently.",
          "isCorrect": false
        },
        {
          "text": "The AR is delinked and remains as a Dues In to MoD.",
          "rationale": "The procedure guide states that when an Earmark is closed, an Open AR is delinked and remains a Dues In, with the stock becoming 'Available Stock' upon arrival.",
          "isCorrect": true
        },
        {
          "text": "The AR is automatically re-linked to the next highest priority Earmark.",
          "rationale": "The system does not automatically re-link the AR; the resulting stock becomes available for general allocation.",
          "isCorrect": false
        },
        {
          "text": "An alert is sent to the Inventory Manager to manually satisfy the AR.",
          "rationale": "No manual satisfaction is required; the AR simply becomes a general due-in for stock rather than being tied to a specific Earmark.",
          "isCorrect": false
        }
      ],
      "hint": "Think about what happens to a firm order when the specific reservation it was for is no longer needed."
    },
    {
      "category": "Earmarks",
      "question": "What happens if a manual Task Issue is initiated for a General Earmark containing parts that are subject to management control?",
      "answerOptions": [
        {
          "text": "The Task Issue will fail, and the Earmark will be set to a 'Draft' status.",
          "rationale": "The system allows the issue to proceed but requires additional steps; it does not fail it outright or change the Earmark status.",
          "isCorrect": false
        },
        {
          "text": "The system will automatically bypass the management control for Task Issues.",
          "rationale": "Management controls are not automatically bypassed; they are a critical safety and security feature that requires user justification to override.",
          "isCorrect": false
        },
        {
          "text": "A warning is displayed, and the user must provide justification in specific remarks fields to proceed.",
          "rationale": "The process guide explains that a warning icon appears, and upon clicking 'Finish', the user must record justification for overriding the control.",
          "isCorrect": true
        },
        {
          "text": "An alert is sent to the SSBN OBD Team for approval before the issue can be completed.",
          "rationale": "The SSBN OBD Team is associated with TLS stock, not general management controls on parts within a General Earmark.",
          "isCorrect": false
        }
      ],
      "hint": "Consider how the system handles overrides for safety- or supply-controlled items during a bulk issue process."
    }
  ]
}
