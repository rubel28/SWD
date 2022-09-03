<?php

namespace App\Services\Utility;

class UtilityService
{
    public static $fileUploadPath = 'app/public/images/';
    public static $identificationType = [
        'application_registration_card' => 'Application Registration Card',
        'birth_certificate' => 'Birth Certificate',
        'certificate_of_naturalisation' => 'Certificate of Naturalisation',
        'driving_licence' => 'Driving Licence',
        'home_office_letter' => 'Home Office Letter',
        'immigration_status_document' => 'Immigration Status Document',
        'national_identity_card' => 'National Identity Card',
        'national_health_insurance_card' => 'National Health Insurance Card',
        'pan_card' => 'PAN Card',
        'passport' => 'Passport',
        'passport_card' => 'Passport Card',
        'professional_qualification_card' => 'Professional Qualification Card',
        'postal_identity_card' => 'Postal Identity Card',
        'residence_permit' => 'Residence Permit',
        'social_security_card' => 'Social Security Card',
        'tax_id' => 'Tax Id',
        'visa' => 'Visa',
        'voter_id' => 'Voter Id',
        'work_permit' => 'Work Permit',
    ];

    public static $catalog_type_list = [
      'OCC' => 'Occupation',
      'SOF' => 'Source of Fund',
      'REL' => 'Relationship',
      'POR' => 'Purpose of Remittance',
      'DOC' => 'Customer Document ID Type',
      'PTY' => 'Payment method',
      'AOD' => 'Bank Name (Account Deposit)',
      'AGT' => 'Cash Pickup Payout Payee',
    ];


    public static $imageUploadPath = [
        'id_images' => 'uploaded/id_images/',
        'profile_photo' => 'uploaded/profile_photo',
        'country_logos' => 'uploaded/country_logos/',
    ];
    public static $countryFlagSize = [
        'width' => 256,
        'height' => 256
    ];
    public static $profileImageSize = [
        'width' => 100,
        'height' => 100
    ];
    public static $scanImageSize = [
        'width' => 500,
        'height' => 334
    ];
    public static $yesNoStatus = [
        0 => 'No',
        1 => 'Yes'
    ];
    public static $riskProfiling = [
        'green' => 'Low',
        'yellow' => 'Moderate',
        'red' => 'High'
    ];
    public static $package_condition_type_name = [
        'text',
        'select'
    ];
    public static $yesNoText = [
        'yes' => 'Yes',
        'no' => 'No'
    ];

    public static $statusText = [
        'ACTIVE' => 'ACTIVE',
        'IN-ACTIVE' => 'IN-ACTIVE',
        'BANNED' => 'BANNED'
    ];

    public static $transaction_type_is_income_expense = [
        'assets' => 'Assets',
        'expense' => 'Expense',
        'income' => 'Income',
        'liability' => 'Liability',
        'owners_equity' => 'Owners Equity',
    ];


    public static $occupationList = [
        'professional' => 'Professional',
        'student' => 'Student',
        'factory_worker' => 'Factory Worker',
        'plantation_worker' => 'Plantation Worker',
        'outsourcing_worker' => 'Outsourcing Worker',
        'dependent' => 'Dependent',
    ];


    /**
     * @return array
     */
    public static function getYesNoStatus(): array
    {
        return self::$yesNoStatus;
    }

    /**
     * @param array $yesNoStatus
     */
    public static function setYesNoStatus(array $yesNoStatus): void
    {
        self::$yesNoStatus = $yesNoStatus;
    }

    /**
     * @return array
     */
    public static function getStatusText(): array
    {
        return self::$statusText;
    }

    /**
     * @param array $statusText
     */
    public static function setStatusText(array $statusText): void
    {
        self::$statusText = $statusText;
    }


    public static $remittancePurpose = [
        'family_maintenance_savings' => 'FAMILY MAINTENANCE/SAVINGS',
        'repayment_of_loans' => 'REPAYMENT OF LOANS',
        'educational_expenses' => 'EDUCATIONAL EXPENSES',
        'medical_expenses' => 'MEDICAL EXPENSES',
    ];
    public static $sourceOfFund = [
        'salary' => 'Salary',
        'savings' => 'Savings',
        'salary_saving_loan_from_employer' => 'SALARY,SAVING LOAN FROM EMPLOYER',
        'salary_saving_borrow_from_friends' => 'SALARY,SAVING BORROW FROM FRIENDS',
    ];

}
