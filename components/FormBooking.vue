<template>
  <div class="bg-white p-8 rounded-3xl shadow-lg">
    <!-- Progress Bar -->
    <div class="mb-8">
      <div class="flex justify-between items-center mb-4">
        <span class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Step {{ currentStep }}</span>
        <span class="text-sm font-semibold text-gray-600">{{ Math.round((currentStep / 5) * 100) }}% Complete</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-[#e9ca5d] h-2 rounded-full transition-all duration-300" :style="{ width: (currentStep / 5) * 100 + '%' }"></div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" :action="formEndpoint" method="POST" enctype="multipart/form-data" id="form">
      
      <!-- Step 1: Name -->
      <div v-if="currentStep === 1" class="text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your name?</h3>
        <div class="max-w-md mx-auto">
          <input 
            ref="nameInput"
            type="text" 
            v-model="formData.name" 
            name="name"
            placeholder="Enter your full name"
            class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
            required
            @keyup.enter="nextStep"
          >
        </div>
      </div>

      <!-- Step 2: Phone -->
      <div v-if="currentStep === 2" class="text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your phone number?</h3>
        <div class="max-w-md mx-auto">
          <input 
            ref="phoneInput"
            type="tel" 
            v-model="formData.phone" 
            name="phone"
            placeholder="(555) 123-4567"
            class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
            required
            @keyup.enter="nextStep"
          >
        </div>
      </div>

      <!-- Step 3: Address -->
      <div v-if="currentStep === 3" class="text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your address?</h3>
        <div class="max-w-md mx-auto">
          <input 
            ref="addressInput"
            type="text" 
            v-model="formData.address" 
            name="address"
            placeholder="123 Main Street, City, State"
            class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
            required
            @keyup.enter="nextStep"
          >
        </div>
      </div>

      <!-- Step 4: Best Day -->
      <div v-if="currentStep === 4" class="text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your preferred day?</h3>
        <div class="max-w-2xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              v-for="day in dayOptions"
              :key="day"
              type="button"
              @click="formData.bestDay = day"
              :class="[
                'px-4 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-200',
                formData.bestDay === day
                  ? 'bg-[#e9ca5d] border-[#e9ca5d] text-gray-800'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-[#e9ca5d] hover:bg-[#e9ca5d]/10'
              ]"
            >
              {{ day }}
            </button>
          </div>
          <input type="hidden" name="bestDay" :value="formData.bestDay" />
        </div>
      </div>

      <!-- Step 5: Best Time -->
      <div v-if="currentStep === 5" class="text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your preferred time?</h3>
        <div class="max-w-2xl mx-auto">
          <div class="flex flex-col gap-3">
            <button
              v-for="time in timeOptions"
              :key="time"
              type="button"
              @click="formData.bestTime = time"
              :class="[
                'px-6 py-4 text-base font-semibold rounded-full border-2 transition-all duration-200',
                formData.bestTime === time
                  ? 'bg-[#e9ca5d] border-[#e9ca5d] text-gray-800'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-[#e9ca5d] hover:bg-[#e9ca5d]/10'
              ]"
            >
              {{ time }}
            </button>
          </div>
          <input type="hidden" name="bestTime" :value="formData.bestTime" />
        </div>
        
        <!-- Error Message -->
        <div v-if="submitError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            <p class="text-red-700 text-sm">{{ submitError }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between items-center mt-12">
        <button 
          type="button" 
          @click="prevStep" 
          v-if="currentStep > 1"
          class="px-8 py-3 text-lg font-semibold text-gray-600 border border-gray-300 rounded transition-all duration-300 hover:bg-gray-50"
        >
          Back
        </button>
        <div v-else></div>

        <button 
          type="button" 
          @click="nextStep" 
          v-if="currentStep < 5 && isCurrentStepValid"
          class="px-8 py-3 text-lg font-semibold bg-[#e9ca5d] text-gray-800 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Next
        </button>

        <button 
          type="submit" 
          v-if="currentStep === 5 && isCurrentStepValid"
          :disabled="isSubmitting"
          :class="[
            'px-8 py-3 text-lg font-semibold rounded transition-all duration-300',
            isSubmitting 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-[#e9ca5d] text-gray-800 hover:-translate-y-1 hover:shadow-lg'
          ]"
        >
          <span v-if="isSubmitting" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
          <span v-else>{{ submitButtonText }}</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const props = defineProps({
  formEndpoint: {
    type: String,
    required: true
  },
  submitButtonText: {
    type: String,
    default: 'Book Appointment'
  },
  successRedirectUrl: {
    type: String,
    default: '/book-success'
  }
})

const currentStep = ref(1)
const formData = ref({
  name: '',
  phone: '',
  address: '',
  bestDay: 'Any day',
  bestTime: 'Any time'
})
const isSubmitting = ref(false)
const submitError = ref('')

// Options for pill buttons
const dayOptions = ['Any day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const timeOptions = ['Any time','Morning (8AM - 12PM)', 'Afternoon (12PM - 5PM)', 'Evening (5PM - 8PM)']

// Template refs for form inputs
const nameInput = ref(null)
const phoneInput = ref(null)
const addressInput = ref(null)

const isCurrentStepValid = computed(() => {
  switch (currentStep.value) {
    case 1:
      return formData.value.name.trim() !== ''
    case 2:
      return formData.value.phone.trim() !== ''
    case 3:
      return formData.value.address.trim() !== ''
    case 4:
      return formData.value.bestDay !== ''
    case 5:
      return formData.value.bestTime !== ''
    default:
      return false
  }
})

// Auto-focus input when step changes
watch(currentStep, async (newStep) => {
  await nextTick()
  switch (newStep) {
    case 1:
      nameInput.value?.focus()
      break
    case 2:
      phoneInput.value?.focus()
      break
    case 3:
      addressInput.value?.focus()
      break
  }
}, { immediate: true })

const nextStep = () => {
  if (isCurrentStepValid.value && currentStep.value < 5) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = async (event) => {
  // Always prevent default form submission
  event.preventDefault()
  
  // Only submit on step 5 with valid data
  if (currentStep.value === 5 && isCurrentStepValid.value) {
    // Clear any previous errors and set loading state
    submitError.value = ''
    isSubmitting.value = true
    
    try {
      // Create FormData object with all form fields
      const formDataToSubmit = new FormData()
      formDataToSubmit.append('name', formData.value.name)
      formDataToSubmit.append('phone', formData.value.phone)
      formDataToSubmit.append('address', formData.value.address)
      formDataToSubmit.append('bestDay', formData.value.bestDay)
      formDataToSubmit.append('bestTime', formData.value.bestTime)
      
      // Submit to Basin using fetch
      const response = await $fetch(props.formEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formDataToSubmit
      })
      
      // Redirect to success page
      await navigateTo(props.successRedirectUrl)
      
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Set user-friendly error message
      if (error.statusCode === 429) {
        submitError.value = 'Too many requests. Please wait a moment and try again.'
      } else if (error.statusCode >= 500) {
        submitError.value = 'Server error. Please try again later.'
      } else if (error.statusCode === 400) {
        submitError.value = 'Invalid form data. Please check your information and try again.'
      } else if (!navigator.onLine) {
        submitError.value = 'No internet connection. Please check your connection and try again.'
      } else {
        submitError.value = 'Something went wrong. Please try again or contact us directly.'
      }
    } finally {
      isSubmitting.value = false
    }
  }
  
  return false
}
</script>
