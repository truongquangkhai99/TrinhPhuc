
$(function(){
	$.validator.setDefaults({
		errorClass:'help-block',
		highlight: function(element){
			$(element)
				.closest('.form-group')
				.addClass('has-error');
		},
		unhighlight: function(element){
			$(element)
				.closest('.form-group')
				.removeClass('has-error');
		}
		
		
		
	});
	$("#register-form").validate({
		rules:{
			name:{
				required: true,
				lettersonly: true
			},
			email:{
				required:true,
				email: true,
			},
			numberphone:{
				required:true,
				minlength:10
			},
			addresshome:{
				required:true,
			},
			username:{
				required:true,
				nowhitespace: true
			},
			password: {
				required:true,
				minlength: 6
			},
			password2:{
				required: true,
				equalTo:"#password"
			}
		},	
		messages:{
			name:{
				required: 'Hãy nhập họ và tên của bạn.',
				lettersonly: 'Vui lòng nhập đúng tên.'
			},
			email:{
				required: 'Hãy nhập địa chỉ email.',
				email:'Vui lòng nhập đúng email.'
			},
			numberphone:{
				required: 'Hãy nhập số điện thoại.',
				minlength: 'Số điện thoại của bạn ngắn quá.'
			},
			addresshome:{
				required:'Hãy nhập địa chỉ nhà bạn.'
			},
			username:{
				required: 'Hãy nhập tên đăng nhập.',
				nowhitespace:'Vui lòng nhập tên đăng nhập không có dấu cách.'
			},
			password:{
				required: 'Hãy nhập mật khẩu của bạn.',
				minlength:'Mật khẩu quá ngắn'
			},
			password2:{
				required: 'Vui lòng xác nhận lại mật khẩu.',
				equalTo: 'Xác nhận không đúng mật khẩu.'
			}
		}
	});
	$("#forgot-form").validate({
		rules:{
			email:{
				required:true,
				email: true,
			},
			numberphone:{
				required:true,
				minlength:10
			},
			username:{
				required:true,
				nowhitespace: true
			},
			password: {
				required:true,
				minlength: 6
			},
			password2:{
				required: true,
				equalTo:"#password"
			}
		},	
		messages:{
			email:{
				required: 'Hãy nhập địa chỉ email.',
				email:'Vui lòng nhập đúng email.'
			},
			numberphone:{
				required: 'Hãy nhập số điện thoại.',
				minlength: 'Số điện thoại của bạn ngắn quá.'
			},
			username:{
				required: 'Hãy nhập tên đăng nhập.',
				nowhitespace:'Vui lòng nhập tên đăng nhập không có dấu cách.'
			},
			password:{
				required: 'Hãy nhập mật khẩu của bạn.',
				minlength:'Mật khẩu quá ngắn'
			},
			password2:{
				required: 'Vui lòng xác nhận lại mật khẩu.',
				equalTo: 'Xác nhận không đúng mật khẩu.'
			}
		}
	});
	$("#LienHe-form").validate({
		rules:{
			name:{
				required: true,

			},
			email:{
				required:true,
				email: true
			},
			subject:{
				required:true,
			},
			comment:{
				required:true,
			}
		},
		messages:{
			name:{
				required: 'Hãy nhập họ và tên của bạn.',

			},
			email:{
				required: 'Hãy nhập địa chỉ email.',
				email:'Vui lòng nhập đúng email.'
			},
			subject:{
				required:'Nhập tên tiêu đề',

			},
			comment:{
				required:'Nhập vào nôi dung cần hổ trợ.',
				
			}
		}
			
	});
	
	$("#login-admin").validate({
		rules:{
			username:{
				required: true,

			},
			pass:{
				required:true,
			},
		},
		messages:{
			name:{
				required: 'Vui lòng nhập Username.'

			},
			pass:{
				required: 'Vui lòng nhập password.'
			},
		}		
	});
	$("#login-form").validate({
		rules:{
			username:{
				required: true,
			},
			password:{
				required:true,
			},
		},
		messages:{
			username:{
				required: 'Vui lòng nhập tên đăng nhập.'

			},
			password:{
				required: 'Vui lòng nhập mật khẩu.'
			},
		}		
	});
});

