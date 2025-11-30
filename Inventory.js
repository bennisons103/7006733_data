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
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "When an Inventory Manager (IM) receives a notification of a new inactive Part Catalogue Record, where must they navigate to begin the process of making it active?",
      "answerOptions": [
        {
          "text": "Access the 'New Part Record Created' message in the Message Center and click the 'Parts' hyperlink.",
          "rationale": "The process begins with an alert in the Message Center, which contains a direct link to the Part Maintenance screen for the new record.",
          "isCorrect": true
        },
        {
          "text": "Navigate to the Enterprise tab, search for the part number, and select 'Update'.",
          "rationale": "This procedure is used for amending an existing active part record, not for activating a new skeleton record from a notification.",
          "isCorrect": false
        },
        {
          "text": "Use the Bulk Transactions application to upload the mandatory fields for the new part.",
          "rationale": "Bulk Transactions are used for updating multiple records at once, not for the initial review and activation of a single new part record notification.",
          "isCorrect": false
        },
        {
          "text": "Open the Item Workbench and search for the part with an 'Inactive' status.",
          "rationale": "The Item Workbench is used for managing stock and workflows, not for maintaining the core catalogue data of a part record.",
          "isCorrect": false
        }
      ],
      "hint": "The process is initiated by a system notification that directs the user to the correct maintenance screen."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the default setting for the 'Management Control Code' on a new Part Record, and what does it signify?",
      "answerOptions": [
        {
          "text": "Conditional Control – Part Requests are reviewed based on factors like demand priority.",
          "rationale": "While 'Conditional Control' is a valid option, it is not the default setting for a newly created part record.",
          "isCorrect": false
        },
        {
          "text": "No Control – Part Requests are not sent to the Inventory Manager for approval.",
          "rationale": "This is the standard default, signifying that most routine demands will be processed automatically without requiring IM intervention.",
          "isCorrect": true
        },
        {
          "text": "Absolute Control – All Part Requests that cannot be satisfied from local stock are referred to the IM.",
          "rationale": "This is the most restrictive setting and is used for specific reasons like safety, not as the default for all new parts.",
          "isCorrect": false
        },
        {
          "text": "UIN Specific – Control is determined by the specific demanding unit, and this is the default setting.",
          "rationale": "'UIN Specific' is a reason for setting control, not a type of control itself, and it is not the default.",
          "isCorrect": false
        }
      ],
      "hint": "Consider the setting that allows for the most efficient processing of routine demands."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "According to the user guides, what action is prohibited for an Inventory Manager (IM) regarding the Unit of Issue (UoI) on a Part Record?",
      "answerOptions": [
        {
          "text": "Viewing the UoI history in the 'Last Updated' section.",
          "rationale": "IMs can view the audit history of a part record, including changes to its UoI.",
          "isCorrect": false
        },
        {
          "text": "Directly changing the Unit of Issue within the Part Maintenance screen.",
          "rationale": "The documentation states that DTs/IMs should not change the UoI themselves but must contact the Data Team via a specific form.",
          "isCorrect": true
        },
        {
          "text": "Requesting a UoI conversion for a part through the 'Related Links' menu.",
          "rationale": "While a 'Unit of Issue Conversion' link exists, the procedure explicitly forbids DTs from making changes and directs them to the Data Team.",
          "isCorrect": false
        },
        {
          "text": "Adding a comment to the Part Record explaining a necessary UoI change.",
          "rationale": "IMs are permitted to add comments to a Part Record for informational purposes.",
          "isCorrect": false
        }
      ],
      "hint": "Certain critical data fields require a formal change request to a specialized team rather than direct editing."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "Before an IM can make a part inactive, which of the following conditions must be met?",
      "answerOptions": [
        {
          "text": "The part must have an Obsolescence Code of 'OBSOLETE (RETAIN)'.",
          "rationale": "An 'OBSOLETE (RETAIN)' status indicates the part is still needed even if no longer available, which is contrary to the requirements for making it inactive.",
          "isCorrect": false
        },
        {
          "text": "The part's price in BIWMS must be updated to zero.",
          "rationale": "The price is a historical data point; the key criteria for inactivation relate to stock levels and open transactions.",
          "isCorrect": false
        },
        {
          "text": "There must be nil stock, no open Acquisition Requests, and no live contract entries.",
          "rationale": "The guide provides a comprehensive checklist that includes ensuring there are no stock holdings, open orders, or active contracts associated with the part.",
          "isCorrect": true
        },
        {
          "text": "A CSIS 'Part Updated' message must have been received in the Message Centre.",
          "rationale": "While a CSIS message can initiate the process, an IM can also decide to make a part inactive independently, provided all criteria are met.",
          "isCorrect": false
        }
      ],
      "hint": "Think about what would prevent a part from being fully removed from active supply chain processes."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "In the context of a CSIS Supersession, what must an IM do to the 'Superseded' (old) part record?",
      "answerOptions": [
        {
          "text": "Set the Part Status to 'Active' and link it to the new part.",
          "rationale": "The old part should be made inactive, not active, to prevent further use or procurement.",
          "isCorrect": false
        },
        {
          "text": "Delete the part record to remove it from the system entirely.",
          "rationale": "Part records are made inactive for audit purposes; they are not deleted from BIWMS.",
          "isCorrect": false
        },
        {
          "text": "Set the Part Status to 'Inactive' and uncheck 'Allow Purchase Request Create'.",
          "rationale": "This correctly reflects the procedure to make the old part inactive and prevent any new procurement requests from being raised against it.",
          "isCorrect": true
        },
        {
          "text": "Archive the part record by using the 'Process Supersession' hyperlink.",
          "rationale": "The 'Process Supersession' link is used to confirm the relationship after both parts have been updated; it doesn't directly archive the old record.",
          "isCorrect": false
        }
      ],
      "hint": "Consider the necessary actions to prevent the old part from being used or ordered in the future."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the primary source for the creation of procurement vendor part links in BIWMS, and which user role can manually create repair vendor links?",
      "answerOptions": [
        {
          "text": "Links are created manually by IMs; BAs can create repair links.",
          "rationale": "IMs do not manually create procurement links; they are fed from another system.",
          "isCorrect": false
        },
        {
          "text": "Links are fed from ISOPS; IMs can create repair links.",
          "rationale": "ISOPS is the master for pricing, not for vendor part link creation.",
          "isCorrect": false
        },
        {
          "text": "Links are fed from CSIS updates; only Business Administrators (BAs) can manually create repair links.",
          "rationale": "The guide specifies that procurement links come from CSIS, and only BAs can manually create repair vendor links, following a specific approval process.",
          "isCorrect": true
        },
        {
          "text": "Links are created using Bulk Transaction templates; any user can create repair links.",
          "rationale": "While Bulk Transactions can update part data, the primary source of procurement links is CSIS, and repair link creation is a restricted BA function.",
          "isCorrect": false
        }
      ],
      "hint": "Procurement links originate from the master codification system, while repair links have a more restricted manual creation process."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "When activating a new part, what is the significance of the 'Internal Source of Supply (ISoS)' field?",
      "answerOptions": [
        {
          "text": "It specifies the vendor from whom the part will be purchased.",
          "rationale": "The vendor is specified in the Vendor Part link and on the Acquisition Request, not in the ISoS field.",
          "isCorrect": false
        },
        {
          "text": "It determines the depot or unit where Acquisitions will be consigned and is the primary stock location.",
          "rationale": "This field correctly identifies the default MOD location for receiving new stock and for sourcing parts to meet demands.",
          "isCorrect": true
        },
        {
          "text": "It identifies the financial accounting classification for the part.",
          "rationale": "Financial accounting is determined by the 'Capital Indicator Code' and 'Material Accounting Classification Code'.",
          "isCorrect": false
        },
        {
          "text": "It sets the UIN for the location where repair arisings will be sent automatically.",
          "rationale": "The destination for repair arisings is determined by the 'Internal Source of Repair (ISoR)' field.",
          "isCorrect": false
        }
      ],
      "hint": "This field defines the default MOD location for the forward supply chain of the item."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "If an IM needs to update the same field for a large number of parts listed in an offline spreadsheet, what is the recommended tool and first step?",
      "answerOptions": [
        {
          "text": "Use the BIWMS data string tool by copying the list and pasting the resulting string into the Part Criteria search.",
          "rationale": "The BIWMS data string tool is designed for this exact purpose: to convert a list of part numbers into a format that can be used for a bulk search in BIWMS.",
          "isCorrect": true
        },
        {
          "text": "Manually search for each part number from the spreadsheet and update them one by one.",
          "rationale": "This method is inefficient for a large number of parts and is not the recommended procedure.",
          "isCorrect": false
        },
        {
          "text": "Use the Bulk Transactions application to upload a template with the new field value.",
          "rationale": "While Bulk Transactions can update records, the data string tool is specifically mentioned for facilitating a bulk *search* to then perform a multiple record update.",
          "isCorrect": false
        },
        {
          "text": "Request a Business Administrator to run a script to update all the records.",
          "rationale": "The user guides provide the IM with a tool to perform this task themselves, without needing to escalate to a BA.",
          "isCorrect": false
        }
      ],
      "hint": "A specific tool is available in the Inventory Manager's Toolkit (IMTK) to help with searching for multiple parts at once."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What happens to the 'Type of Value Code' (TOVC) in the Prices tab of a Part Record when the price is updated by ISOPS for the first time?",
      "answerOptions": [
        {
          "text": "It remains as 'E' (Estimated), but the price field becomes locked.",
          "rationale": "The TOVC changes to reflect that the price is no longer an estimate but a basic price from the master system.",
          "isCorrect": false
        },
        {
          "text": "The IM must manually change it from 'E' (Estimated) to 'B' (Basic).",
          "rationale": "This change is an automated system process; the IM cannot edit the TOVC field.",
          "isCorrect": false
        },
        {
          "text": "It automatically changes from 'E' (Estimated) to 'B' (Basic).",
          "rationale": "The system automatically updates the TOVC to 'B' (Basic) to signify that the price is now mastered by ISOPS.",
          "isCorrect": true
        },
        {
          "text": "It is cleared and remains blank until a new contract is in place.",
          "rationale": "The TOVC is a mandatory field and indicates the source and status of the price data.",
          "isCorrect": false
        }
      ],
      "hint": "The system's behavior reflects the change in the price's data source from a user estimate to a master system value."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "In the Flex Fields section of a Part Record, what does setting the 'Obsolescence Code' to '03 - OBSOLETE (RETAIN)' signify?",
      "answerOptions": [
        {
          "text": "The part is no longer required by Defence and disposal processes should be followed.",
          "rationale": "This description corresponds to the '04 - OBSOLETE (DISPOSE)' code.",
          "isCorrect": false
        },
        {
          "text": "The part has a future end-of-production date announced by the manufacturer.",
          "rationale": "This definition applies to the '02 - OBSOLESCENT' code.",
          "isCorrect": false
        },
        {
          "text": "The part is in its initial provisioning stage and is new to the inventory.",
          "rationale": "This is covered by the '00 - INITIAL PROCUREMENT' code.",
          "isCorrect": false
        },
        {
          "text": "The part is no longer available from the manufacturer to the original specification, but is still needed.",
          "rationale": "This code is used when Defence has an enduring requirement for an item that can no longer be procured from its original source.",
          "isCorrect": true
        }
      ],
      "hint": "This status indicates that while the item is obsolete from a procurement standpoint, it must be kept for ongoing use."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "When making a part inactive that was procured via FMS/MILSTRIP, what crucial step must be taken BEFORE changing its status in BIWMS?",
      "answerOptions": [
        {
          "text": "The part must be removed from all Interchangeable and Substitutable Groups (I&SG).",
          "rationale": "While this is a general requirement for making any part inactive, there is a specific preceding action required for FMS/MILSTRIP items.",
          "isCorrect": false
        },
        {
          "text": "An AC1 Form must be raised and submitted to the U.S. DOD to cancel outstanding orders.",
          "rationale": "The guide explicitly states that outstanding MILSTRIP orders must be cancelled with the U.S. DOD via an AC1 Form before the part can be made inactive in BIWMS.",
          "isCorrect": true
        },
        {
          "text": "The Inventory Manager must check MIRANDA for stock held by non-aggregating units.",
          "rationale": "This is part of the standard due diligence for making any part inactive, but it's not the specific, external-facing first step for FMS items.",
          "isCorrect": false
        },
        {
          "text": "All supporting documentation must be uploaded to the Attachments section of the Part Record.",
          "rationale": "Uploading documentation is part of the process, but the critical action involves communicating with the external procurement agency first.",
          "isCorrect": false
        }
      ],
      "hint": "Consider the necessary communication with the external procurement authority for these specific types of parts."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "Which of the following fields in the Part Maintenance screen is NOT populated from the initial CSIS/CLASP message and must be completed by the Inventory Manager?",
      "answerOptions": [
        {
          "text": "Stock Number*",
          "rationale": "The full 13-character NSN is part of the core data provided by CSIS in the skeleton record.",
          "isCorrect": false
        },
        {
          "text": "Short Item Name*",
          "rationale": "The Short Item Name is provided by CSIS or CLASP as part of the initial part creation message.",
          "isCorrect": false
        },
        {
          "text": "Capital Indicator Code*",
          "rationale": "This code, indicating how the part is considered for financial accounting, must be selected by the IM from a drop-down list.",
          "isCorrect": true
        },
        {
          "text": "Part",
          "rationale": "The unique part item number (NIIN element) is a core part of the skeleton record and is not editable.",
          "isCorrect": false
        }
      ],
      "hint": "Think about which data relates to internal financial management rather than basic item identification."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the consequence of setting the 'JIT Part' indicator in the Procurement tab of a Part Record?",
      "answerOptions": [
        {
          "text": "It prevents the part from being included in any Interchangeable and Substitutable Groups (I&SG).",
          "rationale": "The JIT indicator relates to the supply method and does not directly restrict its inclusion in an I&SG.",
          "isCorrect": false
        },
        {
          "text": "It sets the 'Default Acquisition Request Status' to 'Open' automatically.",
          "rationale": "While setting the status to 'Open' is often done for JIT parts to enable auto-ordering, ticking the 'JIT Part' box does not do this automatically; they are separate settings.",
          "isCorrect": false
        },
        {
          "text": "It places the part under 'Absolute Control' in the Management Control tab.",
          "rationale": "Placing a JIT part under management control is discouraged as it can slow down the direct supply process.",
          "isCorrect": false
        },
        {
          "text": "It enables the part to be shipped directly from the vendor to the demanding MJDI unit.",
          "rationale": "This indicator is used by BIWMS and MJDI to identify parts on direct supply contracts, allowing them to bypass the depot.",
          "isCorrect": true
        }
      ],
      "hint": "This setting is related to a specific 'Just in Time' supply chain strategy."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "If an IM needs to amend the 'Hazardous Material Code' for a part because it is incorrect in BIWMS but correct in CSIS, what is the correct procedure?",
      "answerOptions": [
        {
          "text": "Update the code directly in the 'Part Info' tab and click Save.",
          "rationale": "The user guide states that IMs cannot amend the Hazardous Material Code themselves.",
          "isCorrect": false
        },
        {
          "text": "Submit a form via the Inventory Manager's Toolkit (IMTK) to the BRG.",
          "rationale": "While the IMTK is a resource, the procedure specifies sending an email to a specific address for this type of data correction.",
          "isCorrect": false
        },
        {
          "text": "Email DESLSOC-SpSvcs-Data-Tx-BIWMS@mod.gov.uk to request the update.",
          "rationale": "This is the specific instruction provided for correcting hazardous material code discrepancies that the IM cannot change directly.",
          "isCorrect": true
        },
        {
          "text": "Raise a support request to BDUK via the SPOC support process.",
          "rationale": "The SPOC process is mentioned for a different issue (bulk updates to Dockyard Interest Reorder Levels), not for hazardous code correction.",
          "isCorrect": false
        }
      ],
      "hint": "This is a controlled data field that requires escalation to a specific data team for amendment."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "During a supersession process, after the old and new part records are updated, what is the purpose of the 'Process Supersession' hyperlink?",
      "answerOptions": [
        {
          "text": "It opens the Part Maintenance screen for the superseding part.",
          "rationale": "The 'Superseding Part' hyperlink is used for that purpose; this link performs a different, finalising action.",
          "isCorrect": false
        },
        {
          "text": "It finalizes the supersession, which then updates all associated open requests and records to the new NIIN.",
          "rationale": "This action confirms the supersession in the system, triggering the automatic update of related transactions like Part Requests and Acquisition Requests.",
          "isCorrect": true
        },
        {
          "text": "It attaches the relevant documentation to both part records.",
          "rationale": "Attachments are managed in the 'Attachments' section of the Part Maintenance screen, not through this link.",
          "isCorrect": false
        },
        {
          "text": "It deletes the old part record from the BIWMS catalogue.",
          "rationale": "The old part record is made inactive, not deleted. This link confirms the relationship between the two records.",
          "isCorrect": false
        }
      ],
      "hint": "This final step in the message centre alert triggers the system-wide update of transactions."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the required action if the 'Special Container Indicator' box is selected in the Part Packaging section of a Part Record?",
      "answerOptions": [
        {
          "text": "The 'Container NSN' must be left blank.",
          "rationale": "If a special container is indicated, the NSN of that container should be entered if known.",
          "isCorrect": false
        },
        {
          "text": "The 'Packing Code' must be set to 'H'.",
          "rationale": "The guide explicitly notes that if the special container indicator is selected, Packing Code H must be chosen.",
          "isCorrect": true
        },
        {
          "text": "The 'Shelf Life' must be set to non-expiring.",
          "rationale": "The container type does not dictate the shelf life of the part itself.",
          "isCorrect": false
        },
        {
          "text": "The 'Quantity Per Unit Pack' must be set to 1.",
          "rationale": "The quantity per pack is independent of whether the part requires a special container.",
          "isCorrect": false
        }
      ],
      "hint": "Selecting this checkbox creates a dependency on another field within the same section."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "In the 'Government Info' tab, who can change the 'IMS Designator Code' for a part?",
      "answerOptions": [
        {
          "text": "Only Business Administrator (BA) users can change the IMS Designator.",
          "rationale": "While BAs have wider access, Inventory Managers can also change the designator under specific circumstances.",
          "isCorrect": false
        },
        {
          "text": "Any Inventory Manager (IM) can change the IMS Designator to any other designator.",
          "rationale": "An IM's ability to change the designator is restricted to the specific designators within their range of responsibility.",
          "isCorrect": false
        },
        {
          "text": "An IM can only change it if they are responsible for both the losing and receiving IMS Designators.",
          "rationale": "The BPOD clarifies this specific restriction. If the change is outside their scope, they must contact their OC BA.",
          "isCorrect": true
        },
        {
          "text": "The IMS Designator is mastered in CSIS and cannot be changed in BIWMS.",
          "rationale": "The IMS Designator is a BIWMS-mastered field and can be changed within the application by users with the correct permissions.",
          "isCorrect": false
        }
      ],
      "hint": "The ability for an IM to perform this action depends on their assigned range of responsibilities."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the function of the 'Repair Response Code' found in the Flex Fields of a Part Record?",
      "answerOptions": [
        {
          "text": "It indicates if the part is subject to routine tests or calibration.",
          "rationale": "Testing and calibration are managed by separate checkboxes in the 'Inspection Information' section.",
          "isCorrect": false
        },
        {
          "text": "It dictates how MJDI repair requests for unserviceable parts should be handled.",
          "rationale": "This code determines whether a repair arising is automatically sent to a depot or if it needs to be reported to the IM for disposition instructions.",
          "isCorrect": true
        },
        {
          "text": "It sets the default status for new Service Requests (SRs) created by F&RP.",
          "rationale": "The default status for new ARs and SRs is set by the 'Default Acquisition Request Status' field in the 'Procurement' tab.",
          "isCorrect": false
        },
        {
          "text": "It specifies the Turn Around Time (TAT) for the preferred repair vendor.",
          "rationale": "The Turn Around Time is stored in the Vendor Part link record, not on the main part record.",
          "isCorrect": false
        }
      ],
      "hint": "This code controls the initial workflow for an unserviceable item reported in the deployed inventory system."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "When an IM is updating multiple part records at once using the 'Update Multiple Records' function, what must they do after updating a field's value?",
      "answerOptions": [
        {
          "text": "Click 'Save' after each field is updated before moving to the next.",
          "rationale": "In the multiple update screen, changes are applied all at once at the end of the process, not individually.",
          "isCorrect": false
        },
        {
          "text": "Add a comment in the 'Remarks' field justifying the change.",
          "rationale": "While adding remarks can be good practice, it is not a mandatory procedural step for the update to function.",
          "isCorrect": false
        },
        {
          "text": "Select the checkbox next to the updated field to include it in the update.",
          "rationale": "The guide specifies that the relevant checkbox must be selected for the change to that field to be applied across all selected records.",
          "isCorrect": true
        },
        {
          "text": "Verify the change by exporting the results to Excel before clicking 'Update'.",
          "rationale": "There is no export function within the 'Update Multiple Records' screen; the update is confirmed by clicking the 'Update' button.",
          "isCorrect": false
        }
      ],
      "hint": "The system needs to know which specific fields you intend to change across all the selected records."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the consequence if an IM attempts to make a NETMA/EPSIS part inactive before the corresponding order has been cancelled in the NETMA system?",
      "answerOptions": [
        {
          "text": "BIWMS will automatically send a cancellation request to NETMA.",
          "rationale": "The process is manual; the IM must request the cancellation in NETMA first. BIWMS does not automatically communicate this change.",
          "isCorrect": false
        },
        {
          "text": "The action will fail because there is an open Acquisition Request.",
          "rationale": "This is the correct outcome. The guide states one of the prerequisites for making any part inactive is that there are no open ARs.",
          "isCorrect": false
        },
        {
          "text": "The part will become inactive, but the open Acquisition Request will remain and cause a data mismatch.",
          "rationale": "The standard checks for open ARs should prevent the part from being made inactive in the first place.",
          "isCorrect": false
        },
        {
          "text": "The user is violating the procedure, as cancellation in NETMA must happen AFTER the part is made inactive.",
          "rationale": "The procedure explicitly states 'ONLY once the order has been cancelled in NETMA... can the user proceed to make the Part Record inactive'.",
          "isCorrect": true
        }
      ],
      "hint": "The procedure for these specialized parts requires clearing open orders in the external system first."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "Which of these file types is explicitly restricted from being uploaded as an attachment to a Part Record in BIWMS?",
      "answerOptions": [
        {
          "text": "PDF files.",
          "rationale": "PDF files are generally acceptable and are a suggested format for read-only documents like a Form 181.",
          "isCorrect": false
        },
        {
          "text": "Text files containing SQL statements.",
          "rationale": "The guide notes that while .sql files are forbidden, sql statements within text files are allowed.",
          "isCorrect": false
        },
        {
          "text": "Compressed files (e.g., .zip, .7z).",
          "rationale": "To address potential security threats, the guide lists compressed files as being restricted from upload.",
          "isCorrect": true
        },
        {
          "text": "Excel files (.xlsx).",
          "rationale": "Standard office document formats like Excel are generally not restricted, unlike executable or compressed files.",
          "isCorrect": false
        }
      ],
      "hint": "Think about file types that could conceal other, potentially harmful files."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the function of the 'Stocktaking Category Code' in the Inspection Information section of Flex Fields?",
      "answerOptions": [
        {
          "text": "It is set by the IM to determine how often the part is physically counted.",
          "rationale": "While it relates to stocktaking, its value is driven by other attributes, and only BA users can change it.",
          "isCorrect": false
        },
        {
          "text": "It indicates if the part requires pre-issue inspection.",
          "rationale": "Pre-issue inspection requirements are set using the 'Pre Issue Inspection' code, not this field.",
          "isCorrect": false
        },
        {
          "text": "It is driven by factors like Security Classification and must be set to '1' if certain special attributes are applied.",
          "rationale": "The guide specifies that if attributes like GACTO1, GCLASIF, or GITAR are applied, this code must be set to '1', indicating a higher level of control.",
          "isCorrect": true
        },
        {
          "text": "It records the UIN of the organization responsible for batch or lot testing.",
          "rationale": "The test organization is recorded in the 'Batch or Lot Test Organisation' field.",
          "isCorrect": false
        }
      ],
      "hint": "This code's value is dependent on the application of other security-related special attributes to the part."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "When a part record is created, the 'Delete When Gone' checkbox is ticked by default. What does this setting control?",
      "answerOptions": [
        {
          "text": "The entire Part Catalogue Record is deleted from BIWMS once all stock is issued.",
          "rationale": "The guide notes that item Part Records remain on BIWMS as inactive and are not deleted.",
          "isCorrect": false
        },
        {
          "text": "The associated vendor part links are deleted when the part is made inactive.",
          "rationale": "This setting affects stock visibility on the Item Workbench, not related catalogue data like vendor links.",
          "isCorrect": false
        },
        {
          "text": "The Item Workbench record for a specific stock line is deleted after that stock is issued out of the system.",
          "rationale": "This correctly describes the function: it removes the specific stock line from the Item Workbench once issued, so it's no longer visible.",
          "isCorrect": true
        },
        {
          "text": "The part record is automatically set to inactive when the on-hand quantity reaches zero.",
          "rationale": "Making a part inactive is a deliberate manual process with many prerequisites; it is not triggered automatically by stock levels.",
          "isCorrect": false
        }
      ],
      "hint": "This setting affects the visibility of individual stock holdings after they have been transacted, not the catalogue record itself."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "If a part is a member of an Interchangeable and Substitutable Group (I&SG), where can an IM find a hyperlink to that group's details?",
      "answerOptions": [
        {
          "text": "In the 'Related Links – Part Links' section.",
          "rationale": "The Part Links section is for creating links like supersessions or containers, not for viewing I&SG membership.",
          "isCorrect": false
        },
        {
          "text": "In the 'Government Info' tab, via the 'UK I&SG No' attribute.",
          "rationale": "The guide states this attribute is automatically populated if the part is in an I&SG, and the reference is a hyperlink to the group.",
          "isCorrect": true
        },
        {
          "text": "In the 'Comments' tab, where a link is manually added.",
          "rationale": "While a link could be added here, the system provides a dedicated, automatically populated field for this purpose.",
          "isCorrect": false
        },
        {
          "text": "In the 'Flex Fields – General' section.",
          "rationale": "The Flex Fields section contains many attributes, but the specific I&SG hyperlink is located in the Government Info tab.",
          "isCorrect": false
        }
      ],
      "hint": "Look for the section containing nationally-specific and high-level classification information."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "What is the purpose of setting a 'Management Control Reviewed On' date?",
      "answerOptions": [
        {
          "text": "It starts a 2-year clock, after which an alert is sent to the IM to review the control.",
          "rationale": "This date is part of the management check process to ensure controls are reviewed periodically, with a system-generated alert after two years.",
          "isCorrect": true
        },
        {
          "text": "It is the date the management control becomes active for the part.",
          "rationale": "The control is active as soon as it is set and saved; this date is for tracking the review cycle.",
          "isCorrect": false
        },
        {
          "text": "It automatically removes the management control on that date.",
          "rationale": "The control remains in place until it is manually changed or removed by a user; it does not expire automatically.",
          "isCorrect": false
        },
        {
          "text": "It is the date the IM must provide a reason for the control in the 'Management Control Remarks' field.",
          "rationale": "The reason for the control is selected from a dropdown list and remarks can be added at any time; this date is for the review process.",
          "isCorrect": false
        }
      ],
      "hint": "This date is part of a recurring process to ensure that special controls on a part remain valid."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "When a new part is created via CSIS, the system generates a skeleton record in BIWMS. What determines which IM receives the 'New Part Record Created' alert?",
      "answerOptions": [
        {
          "text": "The alert is sent to all users with a Business Administrator (BA) role.",
          "rationale": "BAs have wide-ranging permissions, but these specific alerts are routed based on inventory management responsibility.",
          "isCorrect": false
        },
        {
          "text": "The alert is sent to all users who have a matching IMS designator allocated to the part.",
          "rationale": "The system routes the notification to the IM group responsible for that specific range of parts, as identified by the IMS designator.",
          "isCorrect": true
        },
        {
          "text": "The user who submitted the original codification request in CSIS receives the alert.",
          "rationale": "The alert routing is based on system-level data (IMS designator), not on the identity of the individual who initiated the external process.",
          "isCorrect": false
        },
        {
          "text": "The alert is sent to the LSC Business Resolver Group (BRG) for assignment to the correct IM.",
          "rationale": "The BRG gets involved when messages fail; standard successful messages are routed directly to the responsible IMs.",
          "isCorrect": false
        }
      ],
      "hint": "The notification system uses a specific code to route tasks to the correct management team."
    },
    {
      "category": "Part Maintenance",
      "Level": "Standard",
      "question": "In the 'Part Maintenance – Procurement' tab, what does setting the 'Default Acquisition Request Status' to 'Open' achieve?",
      "answerOptions": [
        {
          "text": "It requires all Acquisition Requests (ARs) for this part to be manually authorized by a user with a higher financial delegation.",
          "rationale": "Setting the status to 'Open' is intended to bypass manual authorization, not enforce it.",
          "isCorrect": false
        },
        {
          "text": "It prevents any ARs from being created for this part by the F&RP system.",
          "rationale": "This setting facilitates the processing of F&RP-generated ARs; it does not block them.",
          "isCorrect": false
        },
        {
          "text": "It allows ARs and SRs created by the F&RP system (DSX) to be handled by BIWMS without user intervention.",
          "rationale": "This is the primary function of this setting: to enable automatic ordering for parts where manual review of each F&RP recommendation is not desired.",
          "isCorrect": true
        },
        {
          "text": "It marks the part as being procured exclusively through the MILSTRIP system.",
          "rationale": "The procurement system (e.g., MILSTRIP, CP&F) is defined by the 'Purchasing System' on the contract, not by this status field.",
          "isCorrect": false
        }
      ],
      "hint": "This setting determines the level of automation for processing system-generated procurement recommendations."
    }
  ]
}
