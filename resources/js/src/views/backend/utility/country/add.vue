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
                                <li class="breadcrumb-item"><a href="/country">Country</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Add New Country</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="account-settings-container layout-top-spacing">
            <div class="account-content">
                <div class="scrollspy-example" data-spy="scroll" data-target="#account-settings-scroll" data-offset="-100">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form novalidate id="general-info" class="section general-info" @submit.stop.prevent="submit_form">
                                <div class="info">
                                    <h6 class="">Country Information</h6>
                                    <!-- Forms grid -->
                                    <div class="row">
                                        <div class="col-xl-2 col-lg-12 col-md-4">
                                            <div class="invoice-logo">
                                                <div class="upload pe-md-4">
                                                    <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                    <img
                                                        v-if="selected_file"
                                                        :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                        alt="profile"
                                                        class="profile-preview"
                                                        @click="$refs.fl_profile.click()"
                                                    />
                                                    <div v-else class="profile-preview upload-preview" @click="$refs.fl_profile.click()">
                                                        <div>
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
                                                                class="feather feather-upload-cloud"
                                                            >
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div class="mt-2">Click to Upload Logo</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="name"><strong>Country Name</strong></label>
                                                        <input v-model="form.country_name"
                                                               id="name" type="text"
                                                               class="form-control"
                                                               placeholder="Country Name"
                                                               :class="[is_submit_form ? (form.country_name ? 'is-valid' : 'is-invalid') : '']"
                                                        />
                                                        <div class="valid-feedback">Looks good!</div>
                                                        <div class="invalid-feedback">Please fill the Country Name</div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="iso">ISO</label>
                                                        <input v-model="form.country_iso"
                                                               id="iso" type="text"
                                                               class="form-control"
                                                               placeholder="Country ISO"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="iso3">ISO3</label>
                                                        <input v-model="form.country_iso3"
                                                               id="iso3" type="text"
                                                               class="form-control"
                                                               placeholder="Country ISO3"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="country_code">Country Phone Code</label>
                                                        <input v-model="form.country_phone_code"
                                                               id="country_code" type="text"
                                                               class="form-control"
                                                               placeholder="Country Phone Code"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="country_status">Active Status</label>
                                                        <div id="country_status" class="col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <label class="switch s-outline s-outline-success mb-4 me-2">
                                                            <input
                                                                v-model="form.country_status"
                                                                type="checkbox"
                                                            />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex justify-content-end">
                                            <button type="submit" class="btn btn-success">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/users/account-setting.scss';
    import '@/assets/sass/forms/switches.scss';

    import { useMeta } from '@/composables/use-meta';
    import useValidation from "@/composables/useValidation";
    import useShowMessage from "@/composables/useShowMessage";

    useMeta({ title: 'New User' });
    const { validation,email_validate,is_submit_form } = useValidation();
    const { showMessage } = useShowMessage();

    const selected = ref(null);
    const selected_file = ref(null);
    const form = ref({
        country_iso: '', country_name: '', country_iso3: '',
        country_phone_code:'', country_logo: '',country_status: true
    });

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    const submit_form = () => {
        is_submit_form.value = true;
        //const allValid = validation(form1);
        if (validation(form1)) {
            //form validated success
            showMessage('Form submitted successfully.','success');// type => success/error
        }else {
            showMessage('Field Validation Error!','error');// type => success/error
        }
    };

</script>
