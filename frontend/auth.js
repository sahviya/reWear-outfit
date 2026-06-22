document.addEventListener('DOMContentLoaded', function () {
    // ----------------------------------------------------
    // DOM Element Selections
    // ----------------------------------------------------
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const socialButtons = document.querySelectorAll('.auth-sso-btn');
    const passwordToggles = document.querySelectorAll('.password-toggle');

    // ----------------------------------------------------
    // Password Visibility Toggle Logic
    // ----------------------------------------------------
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            // Either get target from attribute, or look for preceding input
            const targetId = this.getAttribute('data-target');
            const passwordInput = targetId ? document.getElementById(targetId) : this.closest('.input-wrapper').querySelector('input');
            
            if (passwordInput) {
                const isPassword = passwordInput.getAttribute('type') === 'password';
                passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
                
                // Update Eye SVG Icon State
                if (isPassword) {
                    this.innerHTML = `
                        <!-- Eye Off Icon -->
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-off-icon">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                            <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                    `;
                } else {
                    this.innerHTML = `
                        <!-- Eye Icon -->
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    `;
                }
            }
        });
    });

    // ----------------------------------------------------
    // Password Strength Indicator Logic (Registration Only)
    // ----------------------------------------------------
    if (registerForm) {
        const passwordInput = registerForm.querySelector('#password');
        const strengthFill = document.getElementById('strengthFill');
        const strengthLabel = document.getElementById('strengthLabel');

        if (passwordInput && strengthFill && strengthLabel) {
            passwordInput.addEventListener('input', function () {
                const val = this.value;
                const stats = checkPasswordStrength(val);
                
                strengthFill.style.width = stats.fillWidth;
                strengthFill.style.backgroundColor = stats.fillColor;
                strengthLabel.innerHTML = `<span>${stats.label}</span>`;
            });
        }
    }

    // ----------------------------------------------------
    // Remember Me Autofill (Login Only)
    // ----------------------------------------------------
    if (loginForm) {
        const emailInput = loginForm.querySelector('#email');
        const rememberCheckbox = loginForm.querySelector('#rememberMe');
        const rememberedEmail = localStorage.getItem('rememberedEmail');

        if (rememberedEmail && emailInput) {
            emailInput.value = rememberedEmail;
            if (rememberCheckbox) {
                rememberCheckbox.checked = true;
            }
        }
    }

    // ----------------------------------------------------
    // SSO / Social Authentication Handlers
    // ----------------------------------------------------
    socialButtons.forEach(button => {
        button.addEventListener('click', function () {
            const provider = this.getAttribute('data-provider');
            const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);
            
            // Show loading state on click
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            const originalText = this.innerHTML;
            this.textContent = 'Connecting...';
            
            setTimeout(() => {
                const mockName = providerName + ' User';
                localStorage.setItem('loggedInUser', mockName);
                
                // Show Success Overlay Modal
                showSuccessModal(
                    'Success!',
                    `Authenticated via ${providerName}. Redirecting to shop...`,
                    'index.html'
                );
            }, 1000);
        });
    });

    // ----------------------------------------------------
    // Form submission: SIGN IN PAGE
    // ----------------------------------------------------
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const emailEl = loginForm.querySelector('#email');
            const passwordEl = loginForm.querySelector('#password');
            const rememberCheckbox = loginForm.querySelector('#rememberMe');
            
            const emailVal = emailEl.value.trim();
            const passwordVal = passwordEl.value.trim();
            
            let isValid = true;
            
            // Clear errors
            clearFieldError(emailEl);
            clearFieldError(passwordEl);
            
            // Validate Email Address
            if (!emailVal) {
                showFieldError(emailEl, 'Email Address is required.');
                isValid = false;
            } else if (!validateEmailPattern(emailVal)) {
                showFieldError(emailEl, 'Please enter a valid email address.');
                isValid = false;
            }
            
            // Validate Password
            if (!passwordVal) {
                showFieldError(passwordEl, 'Password is required.');
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Show loading status
            const submitBtn = loginForm.querySelector('#signInBtn');
            setButtonLoading(submitBtn, true);
            disableFormInputs(loginForm, true);
            
            // Simulate login without backend integration
            setTimeout(() => {
                localStorage.setItem('loggedInUser', emailVal.split('@')[0]);
                
                if (rememberCheckbox && rememberCheckbox.checked) {
                    localStorage.setItem('rememberedEmail', emailVal);
                } else {
                    localStorage.removeItem('rememberedEmail');
                }
                
                showSuccessModal(
                    'Welcome Back!',
                    `Logged in successfully. Welcome, ${emailVal.split('@')[0]}!`,
                    'index.html'
                );
            }, 1000);
        });
    }

    // ----------------------------------------------------
    // Form submission: SIGN UP PAGE
    // ----------------------------------------------------
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const fullNameEl = registerForm.querySelector('#fullName');
            const usernameEl = registerForm.querySelector('#username');
            const emailEl = registerForm.querySelector('#email');
            const mobileEl = registerForm.querySelector('#mobile');
            const passwordEl = registerForm.querySelector('#password');
            const confirmPasswordEl = registerForm.querySelector('#confirmPassword');
            const genderEl = registerForm.querySelector('#gender');
            const cityEl = registerForm.querySelector('#city');
            const stateEl = registerForm.querySelector('#state');
            const termsEl = registerForm.querySelector('#termsCheckbox');
            const privacyEl = registerForm.querySelector('#privacyCheckbox');
            
            let isValid = true;
            
            // Clear errors
            [fullNameEl, usernameEl, emailEl, mobileEl, passwordEl, confirmPasswordEl, cityEl, stateEl].forEach(clearFieldError);
            
            // Full Name validation
            if (!fullNameEl.value.trim()) {
                showFieldError(fullNameEl, 'Full Name is required.');
                isValid = false;
            } else if (fullNameEl.value.trim().length < 2) {
                showFieldError(fullNameEl, 'Full Name must be at least 2 characters.');
                isValid = false;
            }
            
            // Username validation
            const usernameVal = usernameEl.value.trim();
            if (!usernameVal) {
                showFieldError(usernameEl, 'Username is required.');
                isValid = false;
            } else if (usernameVal.length < 3) {
                showFieldError(usernameEl, 'Username must be at least 3 characters.');
                isValid = false;
            } else if (!/^[A-Za-z0-9_]+$/.test(usernameVal)) {
                showFieldError(usernameEl, 'Username can only contain letters, numbers, and underscores.');
                isValid = false;
            }
            
            // Email Address validation
            const emailVal = emailEl.value.trim();
            if (!emailVal) {
                showFieldError(emailEl, 'Email Address is required.');
                isValid = false;
            } else if (!validateEmailPattern(emailVal)) {
                showFieldError(emailEl, 'Please enter a valid email address.');
                isValid = false;
            }
            
            // Mobile number validation
            const mobileVal = mobileEl.value.trim();
            if (!mobileVal) {
                showFieldError(mobileEl, 'Mobile Number is required.');
                isValid = false;
            } else if (!/^\d{10}$/.test(mobileVal)) {
                showFieldError(mobileEl, 'Please enter a valid 10-digit mobile number.');
                isValid = false;
            }
            
            // Password validation
            const passwordVal = passwordEl.value;
            if (!passwordVal) {
                showFieldError(passwordEl, 'Password is required.');
                isValid = false;
            } else {
                const strength = checkPasswordStrength(passwordVal);
                if (passwordVal.length < 8) {
                    showFieldError(passwordEl, 'Password must be at least 8 characters long.');
                    isValid = false;
                } else if (strength.score < 3) {
                    showFieldError(passwordEl, 'Password must contain a letter, number, and special character.');
                    isValid = false;
                }
            }
            
            // Confirm Password validation
            const confirmPasswordVal = confirmPasswordEl.value;
            if (!confirmPasswordVal) {
                showFieldError(confirmPasswordEl, 'Please confirm your password.');
                isValid = false;
            } else if (confirmPasswordVal !== passwordVal) {
                showFieldError(confirmPasswordEl, 'Passwords do not match.');
                isValid = false;
            }
            
            // City validation
            if (!cityEl.value.trim()) {
                showFieldError(cityEl, 'City is required.');
                isValid = false;
            }
            
            // State validation
            if (!stateEl.value.trim()) {
                showFieldError(stateEl, 'State is required.');
                isValid = false;
            }
            
            // Checkboxes validation
            if (termsEl && !termsEl.checked) {
                showCheckboxError(termsEl, 'You must agree to the Terms & Conditions.');
                isValid = false;
            }
            if (privacyEl && !privacyEl.checked) {
                showCheckboxError(privacyEl, 'You must agree to the Privacy Policy.');
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Start Loading
            const submitBtn = registerForm.querySelector('#signUpBtn');
            setButtonLoading(submitBtn, true);
            disableFormInputs(registerForm, true);
            
            // Simulate registration without backend integration
            setTimeout(() => {
                showSuccessModal(
                    'Success!',
                    'Account created successfully! Redirecting to Sign In...',
                    'login.html'
                );
            }, 1000);
        });
    }

    // ----------------------------------------------------
    // Helper Validation & UI Functions
    // ----------------------------------------------------
    function validateEmailPattern(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function checkPasswordStrength(password) {
        if (!password) {
            return { score: 0, label: 'Weak', fillWidth: '0%', fillColor: 'var(--auth-danger)' };
        }
        
        let score = 0;
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecial = /[^a-zA-Z0-9]/.test(password);
        
        if (password.length >= 8) {
            score = 1;
            if (hasLetter) score++;
            if (hasDigit) score++;
            if (hasSpecial) score++;
        } else {
            score = 1; // Short passwords are automatically weak
        }
        
        let label = 'Weak';
        let fillWidth = '25%';
        let fillColor = 'var(--auth-danger)';
        
        if (password.length >= 8) {
            if (score === 4) {
                label = 'Strong';
                fillWidth = '100%';
                fillColor = 'var(--auth-success)';
            } else if (score >= 2) {
                label = 'Medium';
                fillWidth = '60%';
                fillColor = 'var(--auth-warning)';
            }
        }
        
        return { score, label, fillWidth, fillColor };
    }

    function showFieldError(inputElement, errorMessage) {
        clearFieldError(inputElement);
        
        inputElement.classList.add('is-invalid');
        
        const errorEl = document.createElement('div');
        errorEl.className = 'field-error';
        errorEl.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>${errorMessage}</span>
        `;
        
        const wrapper = inputElement.closest('.input-wrapper') || inputElement.parentNode;
        wrapper.parentNode.appendChild(errorEl);
        
        // Dynamic clear error as user types
        const clearOnInput = () => {
            clearFieldError(inputElement);
            inputElement.removeEventListener('input', clearOnInput);
        };
        inputElement.addEventListener('input', clearOnInput);
    }
    
    function showCheckboxError(checkboxElement, errorMessage) {
        const parentContainer = checkboxElement.closest('.agreement-label') || checkboxElement.parentNode;
        
        // Remove existing error in the parent
        const existingError = parentContainer.querySelector('.field-error');
        if (existingError) existingError.remove();
        
        const errorEl = document.createElement('div');
        errorEl.className = 'field-error';
        errorEl.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>${errorMessage}</span>
        `;
        
        parentContainer.appendChild(errorEl);
        
        const clearOnCheck = () => {
            errorEl.remove();
            checkboxElement.removeEventListener('change', clearOnCheck);
        };
        checkboxElement.addEventListener('change', clearOnCheck);
    }

    function clearFieldError(inputElement) {
        if (!inputElement) return;
        inputElement.classList.remove('is-invalid');
        const parent = inputElement.closest('.auth-field');
        if (parent) {
            const error = parent.querySelector('.field-error');
            if (error) error.remove();
        }
    }

    function setButtonLoading(buttonElement, isLoading) {
        if (!buttonElement) return;
        if (isLoading) {
            buttonElement.classList.add('btn-loading');
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove('btn-loading');
            buttonElement.disabled = false;
        }
    }

    function disableFormInputs(formElement, isDisable) {
        const inputs = formElement.querySelectorAll('input, select, button[type="submit"]');
        inputs.forEach(el => {
            if (el.id !== 'signUpBtn' && el.id !== 'signInBtn') {
                el.disabled = isDisable;
            }
        });
    }

    function showSuccessModal(title, message, redirectUrl) {
        const overlay = document.createElement('div');
        overlay.className = 'auth-success-overlay';
        overlay.innerHTML = `
            <div class="auth-success-card">
                <div class="auth-success-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h2>${title}</h2>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1500);
    }
});
