<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-home"
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                    </a>
                                </li>
                                <li class="breadcrumb-item"><a href="javascript:;">User Manage</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>All User</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-12 layout-spacing">
                <div class="panel br-6">
                    <div class="custom-table panel-body p-0">
                        <div class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0">
                            <button variant="primary" class="btn m-1 btn-primary" @click="export_table('csv')">CSV</button>
                            <vue3-json-excel class="btn btn-primary m-1" name="table.xls" :fields="excel_columns()" :json-data="excel_items()">Excel</vue3-json-excel>
                            <button variant="primary" class="btn m-1 btn-primary" @click="export_table('print')">Print</button>
                            <button variant="primary" class="btn m-1 btn-primary" @click="export_table('pdf')">PDF</button>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">

                            <template #beforeFilter>
                                <router-link :to="{name: 'user-add'}" class="btn me-2 btn-primary"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-plus"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                    Add New
                                </router-link>

                            </template>
                            <template #action>
                                <a href="javascript:void(0);" title="View" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-eye"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </a>
                                <a href="javascript:void(0);" title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-edit-2"
                                    >
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </a>
                                <a href="javascript:void(0);" title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-trash"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </a>
                            </template>
                            <template #KYC_status="props">
                                <span class="badge inv-status" :class="'badge-' + props.row.KYC_status">{{ props.row.KYC_status }}</span>
                            </template>
                            <template #PEP_status="props">
                                <span class="badge inv-status" :class="'badge-' + props.row.PEP_status">{{ props.row.PEP_status }}</span>
                            </template>
                            <template #monthly_limit="props"> ${{ props.row.monthly_limit }} </template>
                            <template #reset_password="props">
                                <a href="javascript:" class="cancel" @click="password_reset(props.row)">
                                    <button type="button" class="btn btn-primary btn-sm">Reset</button>
                                </a>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    // import '@/assets/sass/apps/invoice-list.scss';

    //pdf export
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'All User' });

    const columns = ref(['customer_id', 'customer_name', 'passport_no',
        'mobile_no', 'email_address', 'address', 'monthly_limit','Source_of_wealth',
        'source_of_fund','KYC_status','PEP_status','reset_password', 'action']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { action: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['customer_id', 'customer_name', 'passport_no', 'mobile_no', 'email_address',
            'monthly_limit','Source_of_wealth','source_of_fund','KYC_status','PEP_status'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        items.value = [
            { customer_id: 1, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 2, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 3, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 4, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 5, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 6, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 7, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 8, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 9, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 10, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 11, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 12, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },
            { customer_id: 13, customer_name: 'Tiger Nixon', passport_no: 'AB00021', mobile_no: '65012222333', email_address: 'nixon@abc.com',address:'Singapore', monthly_limit: '50,000', Source_of_wealth: 'Salary', source_of_fund: 'Salary',KYC_status:'success',PEP_status:'success' },

        ];
    };

    const password_reset = (item) => {
        alert('Reset password for ' + item.customer_name);
    };

    const export_table = (type) => {
        let cols = columns.value.filter((d) => d != 'reset_password' && d != 'action');
        let records = items.value;
        let filename = 'table';

        if (type == 'csv') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = cols
                .map((d) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item) => {
                cols.map((d, index) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !window.navigator.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type == 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            cols.map((d) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            records.map((item) => {
                rowhtml += '<tr>';
                cols.map((d) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
            // winPrint.close();
        } else if (type == 'pdf') {
            cols = cols.map((d) => {
                return { header: capitalize(d), dataKey: d };
            });
            const doc = new jsPDF('l', 'pt', cols.length > 10 ? 'a3' : 'a4');
            doc.autoTable({
                headStyles: { fillColor: '#eff5ff', textColor: '#515365' },
                columns: cols,
                body: records,
                styles: { overflow: 'linebreak' },
                pageBreak: 'auto',
                margin: { top: 45 },
                didDrawPage: () => {
                    doc.text('All User', cols.length > 10 ? 535 : 365, 30);
                },
            });
            doc.save(filename + '.pdf');
        }
    };

    const excel_columns = () => {
        return {
            'Customer ID': 'customer_id',
            'Customer Name': 'customer_name',
            'Passport/ID No': 'passport_no',
            'Mobile No': 'mobile_no',
            'Email Address': 'email_address',
            Address: 'address',
            'Monthly Limit': 'monthly_limit',
            'Source of Wealth': 'Source_of_wealth',
            'Source of Fund':'source_of_fund',
            'KYC Status':'KYC_status',
            'PEP Status':'PEP_status',
        };
    };
    const excel_items = () => {
        return items.value;
    };
    const capitalize = (text) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };
</script>
