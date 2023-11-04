import java.util.Scanner;
import java.io.FileInputStream;

class Solution
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int num=sc.nextInt();
		String str = ""+num;
        char[] digits = str.toCharArray();
        int sum = 0;
		for(int i=0;i<digits.length;i++){
            sum += Integer.parseInt(String.valueOf(digits[i]));
        }
        System.out.println(sum);
	}
}