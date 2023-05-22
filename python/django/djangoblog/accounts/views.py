from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout


def signup_view(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # print(user)

            # log the user in
            login(request, user)
            # redirect to home page
            return redirect("/articles/")
        else:
            print("form is not valid")
    else:
        form = UserCreationForm()
    return render(request, "accounts/signup.html", {"form": form})


def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            # log the user in
            user = form.get_user()
            print(user)
            login(request, user)
            if "next" in request.POST:
                return redirect(request.POST.get("next"))
            else:
                return redirect("/articles/")
    else:
        form = AuthenticationForm()
    return render(request, "accounts/login.html", {"form": form})


# testing2
# hehe123456789


def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("/")
